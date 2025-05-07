
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, File } from 'lucide-react';

const TemplateSelection = () => {
  return (
    <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-purple-100 to-indigo-50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-purple-600" />
            <CardTitle className="text-xl text-purple-800">Business Template</CardTitle>
          </div>
          <CardDescription>
            Professional business document template
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-4">
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="space-y-2">
              <div className="h-4 w-3/4 bg-purple-200 rounded"></div>
              <div className="h-4 w-1/2 bg-purple-200 rounded"></div>
              <div className="h-4 w-full bg-purple-200 rounded"></div>
              <div className="h-4 w-2/3 bg-purple-200 rounded"></div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-full bg-purple-200 rounded"></div>
              <div className="h-4 w-full bg-purple-200 rounded"></div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 rounded-b-lg p-6">
          <Link to="/template/business" className="w-full">
            <Button className="w-full bg-purple-600 hover:bg-purple-700">
              Select Business Template
            </Button>
          </Link>
        </CardFooter>
      </Card>
      
      <Card className="shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader className="bg-gradient-to-r from-blue-100 to-cyan-50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <File className="h-6 w-6 text-blue-600" />
            <CardTitle className="text-xl text-blue-800">Creative Template</CardTitle>
          </div>
          <CardDescription>
            Modern creative document template
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6 space-y-4">
          <div className="border rounded-md p-4 bg-gray-50">
            <div className="flex justify-between mb-4">
              <div className="h-8 w-1/3 bg-blue-200 rounded"></div>
              <div className="h-8 w-8 bg-blue-200 rounded-full"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-blue-200 rounded"></div>
              <div className="h-4 w-4/5 bg-blue-200 rounded"></div>
              <div className="h-4 w-full bg-blue-200 rounded"></div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-12 bg-blue-200 rounded"></div>
              <div className="h-12 bg-blue-200 rounded"></div>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="bg-gray-50 rounded-b-lg p-6">
          <Link to="/template/creative" className="w-full">
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Select Creative Template
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default TemplateSelection;
