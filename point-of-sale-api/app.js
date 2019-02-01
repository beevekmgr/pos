const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
import mongoose from 'mongoose';
import userRouter from './api/v-0.0.0/routes/user/index';
import categoryRouter from './api/v-0.0.0/routes/category/index';
import supplierRouter from './api/v-0.0.0/routes/supplier/index';
import productRouter from './api/v-0.0.0/routes/product/index';
import transactionRouter from './api/v-0.0.0/routes/transaction/index';

import cors from 'cors';
mongoose.connect('mongodb://root:a1b2c3@ds163014.mlab.com:63014/point-of-sales', (err) => {
	if(err){
		console.log({err})
	}
});
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/uploads', express.static('uploads')); //making upload folder static


//specifying routes for the express api
app.use('/api/v-0.0.0/user', userRouter);
app.use('/api/v-0.0.0/category', categoryRouter);
app.use('/api/v-0.0.0/supplier', supplierRouter);
app.use('/api/v-0.0.0/product', productRouter);
app.use('/api/v-0.0.0/transaction' , transactionRouter )



// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;
