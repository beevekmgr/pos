import express from 'express';
import productController from '../../controllers/productController';
const router = express.Router();
import checkAuth from '../../middleware/check-Auth';
import multer from 'multer';
import upload from '../../helpers/imageUploadSetting'



/* GET home page. */
router.post('/getProducts',checkAuth, productController.getProducts);
router.post('/addProduct',checkAuth, upload.single('productImage'), productController.addProduct);
// router.post('/uploadImage', upload.single('image'), productController.uploadImage);
router.post('/updateProduct/:id', checkAuth, productController.updateProduct);
router.post('/deleteProduct/:id', checkAuth, productController.deleteProduct);
router.post('/addUnit',checkAuth, productController.addUnit);
router.post('/getUnits',checkAuth, productController.getUnits);
router.post('/searchName',checkAuth, productController.searchProductsByName);
router.post('/searchBarcode',checkAuth, productController.searchProductsByBarcode);

module.exports = router;

