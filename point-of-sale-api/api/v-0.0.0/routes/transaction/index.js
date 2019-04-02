import express from 'express';
import transactionController from '../../controllers/transactionController';
const router = express.Router();
import checkAuth from '../../middleware/check-Auth'


router.post('/addTransaction', checkAuth, transactionController.addTransaction);
router.post('/getTransaction', checkAuth, transactionController.getTransaction);
router.post('/deleteTransaction/:id', checkAuth, transactionController.deleteTransaction);


module.exports = router;
