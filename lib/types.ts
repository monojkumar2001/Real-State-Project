export interface Property {
  id: string;
  title: string;
  price: number;
  location: {
    address: string;
    city: string;
    state: string;
    zip: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  type: 'house' | 'apartment' | 'condo' | 'townhouse';
  category: 'buy' | 'rent';
  propertyClass: 'residential' | 'commercial';
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  yearBuilt: number;
  images: string[];
  description: string;
  features: string[];
  agent: Agent;
  status: 'available' | 'pending' | 'sold';
  listedDate: string;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  image: string;
  bio: string;
  specialization: string;
  experience: number;
  listings: number;
  rating: number;
  reviews: number;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: number;
}

export interface Testimonial {
  id: string;
  name: string;
  image: string;
  rating: number;
  review: string;
  location: string;
}

export interface SearchFilters {
  location?: string;
  priceMin?: number;
  priceMax?: number;
  bedrooms?: number;
  bathrooms?: number;
  propertyType?: string;
  category?: 'buy' | 'rent';
  propertyClass?: 'residential' | 'commercial';
}