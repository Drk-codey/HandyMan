import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Input } from '../ui/Input';
import { Calendar, Clock, MapPin } from 'lucide-react';
import type { Service, BookingFormData } from '../../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
  onSubmit: (data: BookingFormData) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  service,
  onSubmit
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (field: keyof BookingFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book Service" size="md">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Summary */}
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-4">
            <img 
              src={service.image} 
              alt={service.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.providerName}</p>
              <p className="text-lg font-bold text-orange-600 mt-1">
                ₦{service.price.toLocaleString()}
              </p>
            </div>
          </div>
        </div>

        {/* Date Selection */}
        <Input
          type="date"
          label="Preferred Date"
          icon={<Calendar className="w-5 h-5" />}
          value={formData.date}
          onChange={(e) => handleChange('date', e.target.value)}
          min={new Date().toISOString().split('T')[0]}
          required
        />

        {/* Time Selection */}
        <Input
          type="time"
          label="Preferred Time"
          icon={<Clock className="w-5 h-5" />}
          value={formData.time}
          onChange={(e) => handleChange('time', e.target.value)}
          required
        />

        {/* Address */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Address
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
            <textarea
              value={formData.address}
              onChange={(e) => handleChange('address', e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none"
              rows={3}
              placeholder="Enter your full address"
              required
            />
          </div>
        </div>

        {/* Additional Notes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            value={formData.notes}
            onChange={(e) => handleChange('notes', e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition resize-none"
            rows={3}
            placeholder="Any special requests or instructions?"
          />
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 px-6 py-3 bg-orange-600 rounded-lg font-semibold text-white hover:bg-orange-700 transition"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </Modal>
  );
};