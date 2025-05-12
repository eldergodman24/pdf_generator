
import React from 'react';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';

const PDFFormActions = ({ generatePDF, previewPDF, isGenerating }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 bg-gray-50 rounded-b-lg p-6">
      <Button 
        onClick={generatePDF} 
        className="w-full sm:w-auto bg-black text-white hover:bg-white hover:text-black"
        disabled={isGenerating}
      >
        {isGenerating ? "Generating..." : "Generate & Download PDF"}
      </Button>
      
      <Button
        onClick={previewPDF}
        variant="outline"
        className="w-full sm:w-auto text-black"
        disabled={isGenerating}
      >
        <Eye className="mr-2 h-4 w-4" />
        Preview PDF
      </Button>
    </div>
  );
};

export default PDFFormActions;
