
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { FileText, Eye, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  address: '',
  message: '',
};

const PDFForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [pdfBlob, setPdfBlob] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generatePDF = async () => {
    setIsGenerating(true);
    
    try {
      // Dynamically import html2pdf to reduce initial load time
      const html2pdf = (await import('html2pdf.js')).default;
      
      // Create the content for the PDF
      const pdfContent = document.createElement('div');
      pdfContent.innerHTML = `
        <div style="padding: 20px; font-family: Arial, sans-serif;">
          <h1 style="color: #7E69AB; text-align: center; margin-bottom: 20px;">Document</h1>
          <div style="margin-bottom: 15px;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Company:</strong> ${formData.company}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
          </div>
          <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
            <h3 style="color: #7E69AB;">Message</h3>
            <p>${formData.message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `;
      
      // Generate PDF
      const pdf = await html2pdf().from(pdfContent).outputPdf('datauristring');
      setPdfBlob(pdf);
      
      toast({
        title: "PDF Generated Successfully",
        description: "Your PDF is ready to preview or download",
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

  const previewPDF = () => {
    if (pdfBlob) {
      window.open(pdfBlob, '_blank');
    } else {
      toast({
        title: "No PDF to Preview",
        description: "Please generate a PDF first.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  const downloadPDF = () => {
    if (pdfBlob) {
      const link = document.createElement('a');
      link.href = pdfBlob;
      link.download = `document-${formData.name.toLowerCase().replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      toast({
        title: "No PDF to Download",
        description: "Please generate a PDF first.",
        variant: "destructive",
        duration: 3000,
      });
    }
  };

  return (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input 
              id="name" 
              name="name" 
              placeholder="John Doe" 
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="company">Company</Label>
            <Input 
              id="company" 
              name="company" 
              placeholder="Acme Corp" 
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="john@example.com" 
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
          <Label htmlFor="address">Address</Label>
          <Input 
            id="address" 
            name="address" 
            placeholder="123 Main St, City, Country" 
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <Separator className="my-4" />

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea 
            id="message" 
            name="message" 
            placeholder="Enter additional information here..."
            className="min-h-[120px]"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
      </CardContent>

      <CardFooter className="flex flex-col sm:flex-row gap-4 bg-gray-50 rounded-b-lg p-6">
        <Button 
          onClick={generatePDF} 
          className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700"
          disabled={isGenerating}
        >
          {isGenerating ? "Generating..." : "Generate PDF"}
        </Button>
        
        <div className="flex gap-2 w-full sm:w-auto sm:ml-auto">
          <Button
            onClick={previewPDF}
            variant="outline"
            className="flex-1 border-purple-300 text-purple-700"
            disabled={!pdfBlob || isGenerating}
          >
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          
          <Button
            onClick={downloadPDF}
            variant="outline"
            className="flex-1 border-purple-300 text-purple-700"
            disabled={!pdfBlob || isGenerating}
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PDFForm;
