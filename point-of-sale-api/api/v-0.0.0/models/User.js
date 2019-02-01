import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { security } from '../constants';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	userImage: {
		type : String,
		required : true,
	},
	role: {
		type: String,
		required: true,
		enum: [ 'Cashier', 'Staff', 'Administrator' ]
	}
});

UserSchema.methods = {
	generateToken() {
		return jwt.sign({ _id: this._id, username: this.username }, security.Secret);
	}
};

UserSchema.statics = {
	async userExists(username) {
		try {
			const user = await this.findOne({ username });
			if (user) {
				return true;
			} else {
				return false;
			}
		} catch (err) {
			return false;
		}
	}
};
const User = mongoose.model('User', UserSchema);

export default User;
