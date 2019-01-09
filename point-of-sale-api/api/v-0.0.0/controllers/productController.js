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
		const data = req.body;
		const product = new Product(data);
		try {
			await product.save();
			res.json({ success: true, message: 'product saved successfully' });
		} catch (error) {
			console.log(error)
			res.json({ success: false, message: 'difficulty saving product' });
		}
	},
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
	}
};

export default productController;
