import { ProductData } from './product.interface';
import { ProductModel } from './product.model';

const createProductToMongoDb = async (product: ProductData) => {
  const result = await ProductModel.create(product);
};

const getAllProductFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDb = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

export const productServices = {
  createProductToMongoDb,
  getAllProductFromDb,
  getSingleProductFromDb,
};
