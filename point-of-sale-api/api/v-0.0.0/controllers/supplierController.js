import Supplier from '../models/Supplier';

const supplierController = {
	async getSuppliers(req, res) {
		try {
			const suppliers = await Supplier.getSuppliers();
			console.log(suppliers);
			res.json({ success: true, suppliers });
		} catch (error) {
			console.log(error);
			res.json({ success: false, message: 'error' });
		}
	},
	async addSupplier(req, res) {
		const data = req.body;
		const supplier = new Supplier(data);
		try {
			await supplier.save();
			res.json({ success: true, message: 'supplier saved successfully' });
		} catch (error) {
			console.log(error);
			res.json({ success: false, message: 'difficulty saving supplier' });
		}
	}
};

export default supplierController;
