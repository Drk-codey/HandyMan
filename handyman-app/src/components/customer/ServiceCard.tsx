import React from 'react';
import { MapPin, Star } from 'lucide-react';
import type { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div 
      onClick={() => onClick(service)}
      className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-white rounded-full text-xs font-semibold text-orange-600">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">
          {service.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
          {service.description}
        </p>

        {/* Provider Info */}
        <div className="flex items-center gap-2 mb-3">
          <img 
            src={service.providerAvatar || 'https://i.pravatar.cc/150'} 
            alt={service.providerName}
            className="w-8 h-8 rounded-full border-2 border-orange-500"
          />
          <span className="text-sm font-medium text-gray-700">
            {service.providerName}
          </span>
        </div>

        {/* Rating & Location */}
        <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{service.rating}</span>
            <span className="text-gray-400">({service.reviewsCount})</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            <span>{service.location}</span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-3 border-t">
          <span className="text-sm text-gray-600">Starting at</span>
          <span className="text-xl font-bold text-orange-600">
            {formatPrice(service.price)}
          </span>
        </div>
      </div>
    </div>
  );
};