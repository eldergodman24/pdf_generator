
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { File } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Eye, Download } from 'lucide-react';
import PDFPreviewDialog from './PDFPreviewDialog';
import PDFFormActions from './PDFFormActions';
import { generatePDFBlob } from '@/utils/pdfUtils';

const initialFormData = {
  title: '',
  author: '',
  email: '',
  phone: '',
  category: '',
  tags: '',
  description: '',
};

const createCreativePDFContent = (formData) => {
  const pdfContent = document.createElement('div');
  pdfContent.innerHTML = `
    <div style="padding: 20px; font-family: Arial, sans-serif; background-color: #f0f7ff;">
      <h1 style="color: #3B82F6; text-align: center; margin-bottom: 20px; font-size: 28px;">${formData.title}</h1>
      
      <div style="display: flex; justify-content: space-between; margin-bottom: 30px; background-color: #EFF6FF; padding: 15px; border-radius: 8px;">
        <div>
          <p style="font-weight: bold; color: #1E40AF;">Author: ${formData.author}</p>
          <p style="color: #3B82F6;">${formData.email}</p>
          <p style="color: #3B82F6;">${formData.phone}</p>
        </div>
        <div style="text-align: right;">
          <p style="font-weight: bold; color: #1E40AF;">Category: ${formData.category}</p>
          <p style="color: #3B82F6;">Tags: ${formData.tags}</p>
        </div>
      </div>
      
      <div style="margin-top: 20px; border-top: 2px solid #93C5FD; padding-top: 20px;">
        <h3 style="color: #1E40AF; margin-bottom: 15px;">Description</h3>
        <p style="line-height: 1.6;">${formData.description.replace(/\n/g, '<br>')}</p>
      </div>
      
      <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #60A5FA;">
        <p>Created with Creative PDF Template</p>
        <p>Generated on ${new Date().toLocaleDateString()}</p>
      </div>
    </div>
  `;
  return pdfContent;
};

const CreativePDFForm = () => {
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
      
      // Create the content for the PDF
      const pdfContent = createCreativePDFContent(formData);
      
      // Generate PDF using html2pdf
      const html2pdf = (await import('html2pdf.js')).default;
      const pdf = await html2pdf().from(pdfContent).outputPdf('datauristring');
      setPdfBlob(pdf);
      
      // Directly download the PDF
      const link = document.createElement('a');
      link.href = pdf;
      link.download = `creative-${formData.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast({
        title: "PDF Generated and Downloaded",
        description: "Your creative PDF has been generated and downloaded successfully",
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
        const pdfContent = createCreativePDFContent(formData);
        const html2pdf = (await import('html2pdf.js')).default;
        const pdf = await html2pdf().from(pdfContent).outputPdf('datauristring');
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
        <CardHeader className="bg-gradient-to-r from-blue-100 to-cyan-50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <File className="h-6 w-6 text-blue-600" />
            <CardTitle className="text-2xl text-blue-800">Creative PDF Generator</CardTitle>
          </div>
          <CardDescription>
            Create a stylish creative document
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input 
              id="title" 
              name="title" 
              placeholder="Enter document title" 
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="author">Author</Label>
              <Input 
                id="author" 
                name="author" 
                placeholder="Your name" 
                value={formData.author}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input 
                id="category" 
                name="category" 
                placeholder="e.g. Portfolio, Case Study" 
                value={formData.category}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                name="phone" 
                placeholder="(123) 456-7890" 
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="tags">Tags (comma separated)</Label>
            <Input 
              id="tags" 
              name="tags" 
              placeholder="design, portfolio, creative" 
              value={formData.tags}
              onChange={handleChange}
            />
          </div>

          <Separator className="my-4" />

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea 
              id="description" 
              name="description" 
              placeholder="Describe your project or document..."
              className="min-h-[150px]"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
        </CardContent>

        <CardFooter className="flex flex-col sm:flex-row gap-4 bg-gray-50 rounded-b-lg p-6">
        <PDFFormActions 
            generatePDF={generatePDF} 
            previewPDF={previewPDF}
            isGenerating={isGenerating}
          />
          
          <Button
            onClick={previewPDF}
            variant="outline"
            className="w-full sm:w-auto border-blue-300 text-blue-700"
            disabled={isGenerating}
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview PDF
          </Button>
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

export default CreativePDFForm;
