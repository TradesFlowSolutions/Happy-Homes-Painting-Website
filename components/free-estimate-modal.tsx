
'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { X, Calculator } from 'lucide-react';
import toast from 'react-hot-toast';
import { businessConfig } from '@/config/business-config';

interface FreeEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FreeEstimateModal({ isOpen, onClose }: FreeEstimateModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    projectDescription: '',
    timeframe: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          type: 'Free Estimate'
        }),
      });

      if (response.ok) {
        toast.success('Free estimate request sent! We\'ll contact you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          serviceType: '',
          projectDescription: '',
          timeframe: ''
        });
        onClose();
      } else {
        throw new Error('Failed to send request');
      }
    } catch (error) {
      toast.error('Failed to send request. Please try again or call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center pb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-[color:var(--color-primary)] rounded-full mx-auto mb-4">
            <Calculator className="w-6 h-6 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Free Estimate Request
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Get your free estimate from {businessConfig.business.name}
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full mt-1"
              placeholder="Your full name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                Phone *
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full mt-1"
                placeholder="Your phone"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email *
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full mt-1"
                placeholder="Your email"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="address" className="text-sm font-medium text-gray-700">
              Project Address *
            </Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full mt-1"
              placeholder="Property address for the work"
            />
          </div>

          <div>
            <Label htmlFor="serviceType" className="text-sm font-medium text-gray-700">
              Service Type *
            </Label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent"
            >
              <option value="">Select a service</option>
              {businessConfig.services.map((service, index) => (
                <option key={index} value={service.name}>
                  {service.name}
                </option>
              ))}
              <option value="Multiple Services">Multiple Services</option>
            </select>
          </div>

          <div>
            <Label htmlFor="timeframe" className="text-sm font-medium text-gray-700">
              Preferred Timeframe
            </Label>
            <select
              id="timeframe"
              name="timeframe"
              value={formData.timeframe}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent"
            >
              <option value="">Select timeframe</option>
              <option value="ASAP">As soon as possible</option>
              <option value="1-2 weeks">Within 1-2 weeks</option>
              <option value="1 month">Within 1 month</option>
              <option value="2-3 months">Within 2-3 months</option>
              <option value="Flexible">Flexible timing</option>
            </select>
          </div>

          <div>
            <Label htmlFor="projectDescription" className="text-sm font-medium text-gray-700">
              Project Description *
            </Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full mt-1"
              placeholder="Tell us about your project: rooms, square footage, colors, special requirements, etc."
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary)]/90 text-white"
            >
              {isSubmitting ? 'Sending...' : 'Request Quote'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
