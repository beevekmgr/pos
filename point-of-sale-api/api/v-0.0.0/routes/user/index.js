import express from 'express';
import userController from '../../controllers/userController';
const router = express.Router();
import upload from '../../helpers/imageUploadSetting';

/* GET home page. */
router.post('/login', userController.login);
router.post('/create', upload.single('userImage'), userController.create);
router.post('/showusers', userController.getAllUsers);

module.exports = router;
