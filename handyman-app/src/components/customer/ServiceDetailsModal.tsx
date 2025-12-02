import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Star, MapPin, Clock, Phone, Mail, Calendar } from 'lucide-react';
import type { Service, Review } from '../../types';

interface ServiceDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: Service;
  reviews: Review[];
  onBookNow: (service: Service) => void;
}

export const ServiceDetailsModal: React.FC<ServiceDetailsModalProps> = ({
  isOpen,
  onClose,
  service,
  reviews,
  onBookNow
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'reviews'>('details');

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg">
      <div className="space-y-6">
        {/* Service Header */}
        <div className="flex flex-col md:flex-row gap-6">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full md:w-1/2 h-64 object-cover rounded-lg"
          />
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {service.title}
            </h2>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`w-5 h-5 ${star <= service.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
                <span className="ml-2 text-gray-600">
                  {service.rating} ({service.reviewsCount} reviews)
                </span>
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="w-5 h-5 text-orange-600" />
                <span>{service.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="w-5 h-5 text-orange-600" />
                <span>Response time: Within 1 hour</span>
              </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-orange-600">
                ₦{service.price.toLocaleString()}
              </span>
              <span className="text-gray-600">per service</span>
            </div>

            <button
              onClick={() => onBookNow(service)}
              className="w-full bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Book Now
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('details')}
              className={`pb-3 px-1 font-medium transition ${
                activeTab === 'details'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Details
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-3 px-1 font-medium transition ${
                activeTab === 'reviews'
                  ? 'text-orange-600 border-b-2 border-orange-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Reviews ({reviews.length})
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'details' ? (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Description</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">About the Provider</h3>
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={service.providerAvatar || 'https://i.pravatar.cc/150'} 
                  alt={service.providerName}
                  className="w-16 h-16 rounded-full border-2 border-orange-500"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{service.providerName}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span>{service.rating} rating</span>
                    <span>•</span>
                    <span>150+ jobs completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {reviews.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No reviews yet</p>
            ) : (
              reviews.map((review) => (
                <div key={review.id} className="p-4 border rounded-lg">
                  <div className="flex items-start gap-3 mb-3">
                    <img 
                      src={review.customerAvatar} 
                      alt={review.customerName}
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{review.customerName}</h4>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`w-4 h-4 ${star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};