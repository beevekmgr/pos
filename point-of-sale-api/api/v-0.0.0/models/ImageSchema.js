import mongoose from 'mongoose';
const Schema = mongoose.Schema();

const ImageSchema = new Schema({
	image: {
		type: String,
		required: true
	}
});

const Image = mongoose.model('Image',ImageSchema)
