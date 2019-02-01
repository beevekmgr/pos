import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	barcode: {
		type: String,
		required: true
	},
	category: {
		type: mongoose.Schema.ObjectId,
		ref: 'Category',
		required: true
	},
	costPrice: {
		type: String,
		required: true
	},
	sellingPrice: {
		type: String,
		required: true
	},
	discountPercent: {
		type: String,
		required: true
	},
	supplier: {
		type: mongoose.Schema.ObjectId,
		ref: 'Supplier',
		required: true
	},
	// image:{
	// 	type: mongoose.Schema.ObjectId,
	// 	ref: 'Image',
	// 	required: true
	// },
	unit: {
		type: mongoose.Schema.ObjectId,
		ref: 'Unit',
		required: true
	},
	productImage:{
		type : String,
		required : true
	},
	description: {
		type: String,
		required: true
	},
	quantity: {
		type: String,
		required: true
	},
	// availability: {
	// 	type: String,
	// 	required: true
	// }
});

ProductSchema.methods = {
	
};

ProductSchema.statics = {
	async userExists(_id) {
		try {
			const product = await this.findOne({ _id });
			if (product) {
				return true;
			} else {
				return false;
			}
		} catch (err) {
			return false;
		}
	},
	async getProducts() {
		try {
			const product = await this.find({});
			return product;
		} catch (err) {
			return err;
		}
	}
};

const Product = mongoose.model('Product', ProductSchema);

export default Product;
