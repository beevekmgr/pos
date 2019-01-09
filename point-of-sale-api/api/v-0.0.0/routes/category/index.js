import express from 'express';
import categoryController from '../../controllers/categoryController';
const router = express.Router();

/* GET home page. */
router.post('/getCategories', categoryController.getCategories);
router.post('/addCategory', categoryController.addCategory);


module.exports = router;
