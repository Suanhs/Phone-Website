export type Category = 'Phone Cases' | 'Chargers' | 'Cables' | 'Screen Protectors' | 'Refurbished Phones' | 'Accessories';

export interface Product {
  id: string;
  title: string;
  category: Category;
  price: number;
  condition: 'New' | 'Used' | 'Refurbished';
  brand: string;
  quantity: number;
  description: string;
  image: string;
  pickupAvailable: boolean;
  deliveryAvailable: boolean;
  status: 'Published' | 'Draft' | 'Sold Out';
}

export interface RepairService {
  id: string;
  title: string;
  category: string;
  deviceBrand: string;
  issueType: string;
  description: string;
  estimatedPrice: number;
  estimatedTime: string;
  icon?: string;
  image?: string;
}

export interface Booking {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  deviceBrand: string;
  deviceModel: string;
  issue: string;
  preferredDate: string;
  preferredTime: string;
  status: 'New' | 'Confirmed' | 'In Progress' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface Quote {
  id: string;
  customerName: string;
  phone: string;
  email: string;
  deviceBrand: string;
  deviceModel: string;
  issueCategory: string;
  description: string;
  urgency: 'Today' | 'This week' | 'Not urgent';
  status: 'New' | 'Replied' | 'Accepted' | 'Rejected';
  createdAt: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  reviewText: string;
  repairType: string;
  createdAt: string;
}
