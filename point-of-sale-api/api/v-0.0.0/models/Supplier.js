import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	contact: {
		type: String,
		required: true
	}
});

SupplierSchema.statics = {
	async getSuppliers() {
		try {
			const supplier = await this.find({});
			return supplier;
		} catch (err) {
			return err;
		}
	}
};

const Supplier = mongoose.model('Supplier', SupplierSchema);

export default Supplier;
