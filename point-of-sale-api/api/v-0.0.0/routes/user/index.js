import express from 'express';
import userController from '../../controllers/userController';
const router = express.Router();

/* GET home page. */
router.post('/login', userController.login);
router.post('/create', userController.create);
router.post('/showusers', userController.getAllUsers);

module.exports = router;
