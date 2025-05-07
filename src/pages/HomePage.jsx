
import React from 'react';
import TemplateSelection from '@/components/TemplateSelection';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-5xl mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">Quick PDF Generator</h1>
        <p className="text-lg text-gray-600 mb-4">Select a template to create your PDF document</p>
        <p className="text-md text-gray-500">Choose from our professionally designed templates for your needs</p>
      </div>
      
      <TemplateSelection />
      
      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>All PDFs are generated locally on your browser - no data is sent to any server.</p>
      </div>
    </div>
  );
};

export default HomePage;
