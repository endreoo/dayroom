export interface User {
  id: string;
  email: string;
  name: string;
  role: 'client' | 'property';
}

export type PropertyType = 
  | 'hotel'
  | 'apartment'
  | 'villa'
  | 'resort'
  | 'boutique_hotel'
  | 'guesthouse'
  | 'hostel';

export type PriceCategory = 
  | 'budget'
  | 'economy'
  | 'mid_range'
  | 'luxury'
  | 'ultra_luxury';

export interface Property {
  id: string;
  name: string;
  type: PropertyType;
  priceCategory: PriceCategory;
  location: {
    address: string;
    city: string;
    country: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  amenities: string[];
  images: string[];
  rating: number;
  basePrice: number;
  dayStayPrice: number;
  availableTimeSlots: {
    start: string;
    end: string;
  }[];
  features: {
    pool?: boolean;
    spa?: boolean;
    gym?: boolean;
    restaurant?: boolean;
    roomService?: boolean;
    parking?: boolean;
    wifi?: boolean;
  };
}

export interface BookingRequest {
  id: string;
  clientId: string;
  propertyId: string;
  date: string;
  status: 'pending' | 'accepted' | 'rejected' | 'negotiating';
  timeSlot: {
    start: string;
    end: string;
  };
  budget: number;
  specialRequests?: string;
  guestCount: number;
}

export interface Proposal {
  id: string;
  requestId: string;
  propertyId: string;
  price: number;
  status: 'pending' | 'accepted' | 'rejected' | 'negotiating';
  message?: string;
  counterOffers?: {
    price: number;
    timestamp: string;
    fromClient: boolean;
  }[];
}