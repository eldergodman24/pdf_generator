
import PDFForm from '@/components/PDFForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-3xl mb-8 text-center">
        <h1 className="text-4xl font-bold text-purple-900 mb-2">Quick PDF Generator</h1>
        <p className="text-lg text-gray-600">Create and download professional PDF documents in seconds</p>
      </div>
      
      <PDFForm />
      
      <div className="mt-12 text-sm text-gray-500 text-center">
        <p>Fill in the form with your information and generate a PDF document.</p>
        <p className="mt-1">All PDFs are generated locally on your browser - no data is sent to any server.</p>
      </div>
    </div>
  );
};

export default Index;
