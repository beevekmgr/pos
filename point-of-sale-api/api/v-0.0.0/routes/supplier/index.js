import express from 'express';
import supplierController from '../../controllers/supplierController';
const router = express.Router();
import checkAuth from '../../middleware/check-Auth'

router.post('/getSuppliers',checkAuth, supplierController.getSuppliers);
router.post('/addSupplier',checkAuth, supplierController.addSupplier);

module.exports = router;
