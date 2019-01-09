import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	image: {
		type: mongoose.Schema.ObjectId,
		ref: 'ImageSchema'
	},
	hasParentCategory: {
		type: Boolean,
		required: true
	},
	parentCategory: {
		type: mongoose.Schema.ObjectId,
		ref: 'CategorySchema',
		required: function() {
			return this.hasSubcategory;
		}
	}
});

CategorySchema.statics = {
	async getCategories() {
		try {
			const category = await this.find({});
			return category;
		} catch (err) {
			return err;
		}
	}
};

const Category = mongoose.model('Category', CategorySchema);

export default Category;
