
import React from 'react';
import CreativePDFForm from '@/components/CreativePDFForm';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const CreativeTemplate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl mb-8">
        <Link to="/">
          <Button variant="ghost" className="mb-4 pl-0 text-blue-800">
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back to Templates
          </Button>
        </Link>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Creative Template</h1>
          <p className="text-lg text-gray-600">Create a modern creative document</p>
        </div>
      </div>
      
      <CreativePDFForm />
      
      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>Fill in the form with your information and generate a creative PDF document.</p>
      </div>
    </div>
  );
};

export default CreativeTemplate;
