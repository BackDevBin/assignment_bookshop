import { Schema, model, connect } from 'mongoose';

// 1. Create an interface representing a document in MongoDB.

export enum BookCategory {
  Fiction = 'Fiction',
  Science = 'Science',
  SelfDevelopment = 'SelfDevelopment',
  Poetry = 'Poetry',
  Religious = 'Religious',
}

export type ProductData = {
  title: string;
  author: string;
  price: number;
  category: BookCategory;
  description: string;
  quantity: number;
  inStock: boolean;
};
