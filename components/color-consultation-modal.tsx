
'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Palette } from 'lucide-react';
import toast from 'react-hot-toast';
import { businessConfig } from '@/config/business-config';

interface ColorConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ColorConsultationModal({ isOpen, onClose }: ColorConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    roomType: '',
    currentColors: '',
    stylePreference: '',
    consultationType: 'In-Person',
    additionalInfo: ''
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
          type: 'Color Consultation'
        }),
      });

      if (response.ok) {
        toast.success('Color consultation request sent! We\'ll contact you to schedule your appointment.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          roomType: '',
          currentColors: '',
          stylePreference: '',
          consultationType: 'In-Person',
          additionalInfo: ''
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
          <div className="flex items-center justify-center w-12 h-12 bg-[color:var(--color-secondary)] rounded-full mx-auto mb-4">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Color Consultation
          </DialogTitle>
          <p className="text-gray-600 mt-2">
            Get expert color advice from {businessConfig.business.name}
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
              Property Address
            </Label>
            <Input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full mt-1"
              placeholder="Address for consultation"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="roomType" className="text-sm font-medium text-gray-700">
                Room/Area Type *
              </Label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleInputChange}
                required
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent"
              >
                <option value="">Select room</option>
                <option value="Living Room">Living Room</option>
                <option value="Kitchen">Kitchen</option>
                <option value="Bedroom">Bedroom</option>
                <option value="Bathroom">Bathroom</option>
                <option value="Dining Room">Dining Room</option>
                <option value="Home Office">Home Office</option>
                <option value="Exterior">Exterior</option>
                <option value="Multiple Rooms">Multiple Rooms</option>
                <option value="Entire Home">Entire Home</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="consultationType" className="text-sm font-medium text-gray-700">
                Consultation Type
              </Label>
              <select
                id="consultationType"
                name="consultationType"
                value={formData.consultationType}
                onChange={handleInputChange}
                className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent"
              >
                <option value="In-Person">In-Person Visit</option>
                <option value="Phone">Phone Consultation</option>
                <option value="Virtual">Virtual/Video Call</option>
              </select>
            </div>
          </div>

          <div>
            <Label htmlFor="stylePreference" className="text-sm font-medium text-gray-700">
              Style Preference
            </Label>
            <select
              id="stylePreference"
              name="stylePreference"
              value={formData.stylePreference}
              onChange={handleInputChange}
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[color:var(--color-primary)] focus:border-transparent"
            >
              <option value="">Select style</option>
              <option value="Modern">Modern/Contemporary</option>
              <option value="Traditional">Traditional</option>
              <option value="Farmhouse">Farmhouse/Rustic</option>
              <option value="Transitional">Transitional</option>
              <option value="Coastal">Coastal</option>
              <option value="Industrial">Industrial</option>
              <option value="Eclectic">Eclectic/Mixed</option>
              <option value="Minimalist">Minimalist</option>
              <option value="Not Sure">Not Sure - Need Guidance</option>
            </select>
          </div>

          <div>
            <Label htmlFor="currentColors" className="text-sm font-medium text-gray-700">
              Current Colors (if any)
            </Label>
            <Input
              type="text"
              id="currentColors"
              name="currentColors"
              value={formData.currentColors}
              onChange={handleInputChange}
              className="w-full mt-1"
              placeholder="e.g., Beige walls, white trim, etc."
            />
          </div>

          <div>
            <Label htmlFor="additionalInfo" className="text-sm font-medium text-gray-700">
              Additional Information
            </Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              rows={3}
              className="w-full mt-1"
              placeholder="Tell us about your vision, challenges, or specific questions about color selection..."
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
              className="flex-1 bg-[color:var(--color-secondary)] hover:bg-[color:var(--color-secondary)]/90 text-white"
            >
              {isSubmitting ? 'Sending...' : 'Request Consultation'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
