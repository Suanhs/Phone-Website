import { Product, RepairService, Review, Booking, Quote } from '../types';

export const mockProducts: Product[] = [
  {
    id: "p1",
    title: "iPhone 13 Clear Case",
    category: "Phone Cases",
    price: 19.99,
    condition: "New",
    brand: "Apple",
    quantity: 50,
    description: "Crystal clear case with shock-absorbing corners.",
    image: "https://images.unsplash.com/photo-1603313011101-320f66a4f360?auto=format&fit=crop&q=80&w=400",
    pickupAvailable: true,
    deliveryAvailable: true,
    status: "Published"
  },
  {
    id: "p2",
    title: "USB-C Fast Charger",
    category: "Chargers",
    price: 24.99,
    condition: "New",
    brand: "Generic",
    quantity: 100,
    description: "20W USB-C power adapter for fast charging.",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&q=80&w=400",
    pickupAvailable: true,
    deliveryAvailable: true,
    status: "Published"
  },
  {
    id: "p3",
    title: "Refurbished iPhone 12 - 64GB",
    category: "Refurbished Phones",
    price: 399.00,
    condition: "Refurbished",
    brand: "Apple",
    quantity: 3,
    description: "Excellent condition, fully tested, 90-day warranty.",
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?auto=format&fit=crop&q=80&w=400",
    pickupAvailable: true,
    deliveryAvailable: false,
    status: "Published"
  }
];

export const mockRepairs: RepairService[] = [
  {
    id: "r1",
    title: "iPhone Screen Replacement",
    category: "Screen Repair",
    deviceBrand: "Apple",
    issueType: "Cracked Screen",
    description: "Fast, professional screen replacement using high-quality parts. Includes a lifetime warranty on the part.",
    estimatedPrice: 129,
    estimatedTime: "30-60 mins",
    icon: "Smartphone"
  },
  {
    id: "r2",
    title: "Samsung Battery Replacement",
    category: "Battery Repair",
    deviceBrand: "Samsung",
    issueType: "Battery Drain",
    description: "Restore your phone's battery life with a new, genuine battery.",
    estimatedPrice: 79,
    estimatedTime: "45 mins",
    icon: "Battery"
  },
  {
    id: "r3",
    title: "Charging Port Repair",
    category: "Port Repair",
    deviceBrand: "Any",
    issueType: "Not Charging",
    description: "We'll clean or replace your charging port so you can power up again.",
    estimatedPrice: 89,
    estimatedTime: "1 hour",
    icon: "Cable"
  },
  {
    id: "r4",
    title: "Water Damage Inspection",
    category: "Diagnostics",
    deviceBrand: "Any",
    issueType: "Water Damage",
    description: "Full diagnostic and ultrasonic cleaning for water-damaged devices.",
    estimatedPrice: 49,
    estimatedTime: "24-48 hours",
    icon: "Droplets"
  }
];

export const mockReviews: Review[] = [
  {
    id: "rv1",
    customerName: "Sarah Jenkins",
    rating: 5,
    reviewText: "Fixed my iPhone screen in 30 minutes! Looks brand new. Very friendly service.",
    repairType: "iPhone Screen Replacement",
    createdAt: "2024-05-20"
  },
  {
    id: "rv2",
    customerName: "Mike T.",
    rating: 5,
    reviewText: "Thought I needed a new charging port, but they just cleaned it out for a fraction of the cost. Honest people.",
    repairType: "Charging Port Repair",
    createdAt: "2024-05-18"
  },
  {
    id: "rv3",
    customerName: "Lisa Wong",
    rating: 4,
    reviewText: "Great price on an iPad screen repair. Took a little longer than expected but good quality.",
    repairType: "iPad Screen Repair",
    createdAt: "2024-05-15"
  }
];

export const initialBookings: Booking[] = [
  {
    id: "b1",
    customerName: "John Doe",
    phone: "555-0192",
    email: "john@example.com",
    deviceBrand: "Apple",
    deviceModel: "iPhone 13 Pro",
    issue: "Cracked screen, completely shattered",
    preferredDate: "2024-05-25",
    preferredTime: "10:00 AM",
    status: "New",
    createdAt: "2024-05-24T08:00:00Z"
  }
];

export const initialQuotes: Quote[] = [
  {
    id: "q1",
    customerName: "Alice Smith",
    phone: "555-8832",
    email: "alice@example.com",
    deviceBrand: "Samsung",
    deviceModel: "Galaxy S22",
    issueCategory: "Camera",
    description: "Back camera lens is cracked and blurry.",
    urgency: "This week",
    status: "New",
    createdAt: "2024-05-24T09:30:00Z"
  }
];
