import express from 'express';
import productController from '../../controllers/productController';
const router = express.Router();

/* GET home page. */
router.post('/getProducts', productController.getProducts);
router.post('/addProduct', productController.addProduct);
router.post('/addUnit', productController.addUnit);
router.post('/getUnits', productController.getUnits);
module.exports = router;
