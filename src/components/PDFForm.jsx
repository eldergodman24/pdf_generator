
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import PDFFormFields from './PDFFormFields';
import PDFFormActions from './PDFFormActions';
import PDFPreviewDialog from './PDFPreviewDialog';
import { generatePDFBlob } from '@/utils/pdfUtils';

const initialFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  message: '',
};

const PDFForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [pdfBlob, setPdfBlob] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const { toast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Generate PDF
      const pdf = await generatePDFBlob(formData);
      setPdfBlob(pdf);
      
      // Directly download the PDF
      const link = document.createElement('a');
      link.href = pdf;
      link.download = `document-${formData.name.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "PDF Generated and Downloaded",
        description: "Your PDF has been generated and downloaded successfully",
        duration: 3000,
      });
    } catch (error) {
      console.error('PDF generation failed:', error);
      toast({
        title: "PDF Generation Failed",
        description: "There was an error generating your PDF. Please try again.",
        variant: "destructive",
        duration: 3000,
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const previewPDF = async () => {
    if (pdfBlob) {
      setPreviewOpen(true);
    } else {
      try {
        setIsGenerating(true);
        const pdf = await generatePDFBlob(formData);
        setPdfBlob(pdf);
        setPreviewOpen(true);
        
        toast({
          title: "PDF Preview Ready",
          description: "Your PDF preview has been generated",
          duration: 3000,
        });
      } catch (error) {
        console.error('PDF preview generation failed:', error);
        toast({
          title: "PDF Preview Failed",
          description: "There was an error generating your PDF preview. Please try again.",
          variant: "destructive",
          duration: 3000,
        });
      } finally {
        setIsGenerating(false);
      }
    }
  };

  return (
    <>
      <Card className="w-full max-w-3xl shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-600" />
            <CardTitle className="text-2xl text-purple-800">PDF Generator</CardTitle>
          </div>
          <CardDescription>
            Fill in the form below to generate a customized PDF document
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 space-y-4">
          <PDFFormFields formData={formData} handleChange={handleChange} />
        </CardContent>

        <CardFooter>
          <PDFFormActions 
            generatePDF={generatePDF} 
            previewPDF={previewPDF}
            isGenerating={isGenerating}
          />
        </CardFooter>
      </Card>

      <PDFPreviewDialog 
        isOpen={previewOpen} 
        onOpenChange={setPreviewOpen}
        pdfBlob={pdfBlob}
      />
    </>
  );
};

export default PDFForm;
