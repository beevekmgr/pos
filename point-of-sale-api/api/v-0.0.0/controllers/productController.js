import Product from '../models/Product';
import Unit from '../models/Unit';

const productController = {
	async getProducts(req, res) {
		try {
			const product = await Product.getProducts();
			res.json({ success: true, product });
		} catch (error) {
			console.log(error)
			res.json({ success: false, message: 'error' });
		}
	},
	async addProduct(req, res) {
		const product = new Product({
			name : req.body.name,
			barcode : req.body.barcode,
			category : req.body.category,
			costPrice : req.body.costPrice,
			sellingPrice : req.body.sellingPrice,
			discountPercent : req.body.discountPercent,
			supplier : req.body.supplier,
			unit : req.body.unit,
			productImage : req.file.path,
			description : req.body.description,
			quantity : req.body.quantity
		});
		try {
			await product.save();
			res.json({ success: true, message: 'product saved successfully' });
		} catch (error) {
			console.log(error)
			res.json({ success: false, message: 'difficulty saving product' });
		}
	},
	// async uploadImage(req,res) {
	// 	const image = req.body.file
	// 	try {
	// 		res.json({success : true, message: 'image uplaod'});
	// 	} catch (error) {
	// 		res.json({success :false , message : 'error'});
	// 	}
	// },
	async addUnit(req, res) {
		const data = req.body;
		const unit = new Unit(data);
		try {
			await unit.save();
			res.json({ success: true, message: 'unit saved successfully' });
		} catch (err) {
			res.json({ success: false, message: 'problem saving unit	' });
		}
	},
	async getUnits(req,res){
		try {
			const units = await Unit.getUnits();
			res.json({ success: true, units });
		} catch (error) {
			console.log(error)
			res.json({ success: false, message: 'error' });
		}
	},
	async searchProductsByName(req,res){
		try{
			const searchText = req.body.searchProduct;
			if (!searchText){
				res.json({success: false , message : 'please enter something'})
			}else{
				const query = {name : {$regex : new RegExp('^' + searchText, 'i')}} 
			const product = await Product.find(query);
			res.json({success: true , product , searchText});
			}
		} catch (error) {
			console.log(error);
			res.json({success : false , message : 'error'});
		}
	},
	async searchProductsByBarcode(req,res){
		console.log('search search');
		try{
			const searchText = req.body.searchProduct;
			if(!searchText){
				res.json({success: false, message : 'Please enter barcode'})
			}else{
				const query = {barcode : {$regex : new RegExp('^' + searchText)}} 
				const product = await Product.find(query);
				res.json({success: true , product , searchText});
			}
			
		} catch (error) {
			console.log(error);
			res.json({success : false , message : 'error'});
		}
	},
	async deleteProduct(req,res) {
		const id = req.params.id
		await Product.remove({_id : id})
		.exec()
		.then(result => {
			console.log(result);
			res.json({
				message: 'Deleted successfully',
				result : result
			});
		})
		.catch(err => {
			res.json({
				error: err
			})
		});
	},
	async updateProduct(req, res) {
		const id = req.params.id;
		if(req.body.length < 1){
			return res.json({message : 'nothing to update'});
		}
    	const updateOps = {};
		for (const ops of req.body) {
			updateOps[ops.propName] = ops.value;
		}
		await Product.update({_id : id}, { $set: updateOps})
		.exec()
		.then(result => {
			console.log(result);
			res.json({
				message : 'Product updated successfully'
			});
		})
		.catch(err => {
			console.log(err);
			res.json({
				error : err
			});
		});
	}
	
};

export default productController;
