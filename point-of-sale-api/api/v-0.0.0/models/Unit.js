import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UnitSchema = new Schema({
	unit: {
		type: String,
		required: true
	}
});

UnitSchema.statics = {
	async getUnits() {
		try {
			const unit = await this.find({});
			return unit;
		} catch (err) {
			return err;
		}
	}
};

const Unit = mongoose.model('Unit', UnitSchema);

export default Unit;	