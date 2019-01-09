import express from 'express';
import supplierController from '../../controllers/supplierController';
const router = express.Router();

router.post('/getSuppliers', supplierController.getSuppliers);
router.post('/addSupplier', supplierController.addSupplier);

module.exports = router;
