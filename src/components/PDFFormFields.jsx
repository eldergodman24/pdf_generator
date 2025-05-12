
import React from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

const PDFFormFields = ({ formData, handleChange }) => {
  return (
    <>
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

        <div className="space-y-16">
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
    </>
  );
};

export default PDFFormFields;
