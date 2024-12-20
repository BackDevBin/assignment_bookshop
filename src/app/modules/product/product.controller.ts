import { Request, Response } from 'express';
import { productServices } from './product.service';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.products;
    const result = await productServices.createProductToMongoDb(product);

    res.status(200).json({
      success: true,
      message: 'Product is created Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProduct = async (req: Request, res: Response) => {
  try {
    const result = await productServices.getAllProductFromDb();
    res.status(200).json({
      success: true,
      message: 'Product is Retrieved Successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await productServices.getSingleProductFromDb(productId);

    res.status(200).json({
      success: true,
      message: 'Product is retrieved successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const productController = {
  createProduct,
  getAllProduct,
  getSingleProduct,
};
