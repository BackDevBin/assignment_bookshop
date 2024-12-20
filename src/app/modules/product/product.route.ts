import express from 'express';
import { productController } from './product.controller';

const router = express.Router();
router.post('/create-product', productController.createProduct);
router.get('/', productController.getAllProduct);
router.get('/:productId', productController.getSingleProduct);

export const productRoutes = router;