export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  imageUrl: string;
  description?: string;
}

export interface User {
  uid: string;
  displayName: string;
  email: string;
  photoURL?: string;
  isAdmin?: boolean;
}

export interface PurchaseRequest {
  id: string;
  carId: string;
  userId: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: any;
} 