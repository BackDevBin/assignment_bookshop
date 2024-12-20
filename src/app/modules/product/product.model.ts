import { model, Schema } from 'mongoose';
import { BookCategory, ProductData } from './product.interface';

// create Schema of Product model

const productSchema = new Schema<ProductData>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  category: {
    type: String,
    enum: Object.values(BookCategory),
    required: true,
  },
  description: { type: String, required: true },
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// create model and pass Schema

export const ProductModel = model<ProductData>('Product', productSchema);
