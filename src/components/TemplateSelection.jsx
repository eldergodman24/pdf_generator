import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, File } from 'lucide-react';

const TemplateSelection = () => {
  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-gray-600" />
            <CardTitle className="text-xl text-gray-800">Business Template</CardTitle>
          </div>
          <CardDescription>
            Professional business document template
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-4">
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 rounded-b-lg p-6">
          <Link to="/template/business" className="w-full">
            <Button className="w-full text-white bg-black hover:bg-white hover:text-black">
              Select Business Template
            </Button>
          </Link>
        </CardFooter>
      </Card>
      
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <File className="h-6 w-6 text-gray-600" />
            <CardTitle className="text-xl text-gray-800">Creative Template</CardTitle>
          </div>
          <CardDescription>
            Modern creative document template
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-4">
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
              <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded"></div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 rounded-b-lg p-6">
          <Link to="/template/creative" className="w-full">
            <Button className="w-full text-white bg-black hover:bg-white hover:text-black">
              Select Creative Template
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TemplateSelection;
