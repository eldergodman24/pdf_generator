
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog';

const PDFPreviewDialog = ({ isOpen, onOpenChange, pdfBlob }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>PDF Preview</DialogTitle>
          <DialogDescription>
            Preview of your generated PDF document
          </DialogDescription>
        </DialogHeader>
        {pdfBlob && (
          <div className="flex-1 min-h-0 mt-4">
            <iframe 
              src={pdfBlob} 
              className="w-full h-[70vh] border border-gray-200 rounded"
              title="PDF Preview"
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PDFPreviewDialog;
