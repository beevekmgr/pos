import express from 'express';
import categoryController from '../../controllers/categoryController';
const router = express.Router();
import checkAuth from '../../middleware/check-Auth'

/* GET home page. */
router.post('/getCategories',checkAuth, categoryController.getCategories);
router.post('/addCategory', checkAuth,categoryController.addCategory);


module.exports = router;
