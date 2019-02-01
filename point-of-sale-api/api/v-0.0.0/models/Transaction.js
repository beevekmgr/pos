import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    user_id : {
        type: mongoose.Schema.Types.ObjectId,
        required : true
    },
	user : {
        type : String , 
        ref : 'User',
        required : true
    },
	type : {
		type: String,
		required: true
	},
	date : {
		type: Date,
		required: true
    },
    discountPercent : {
        type : Number,

    },
    total : {
        type : Number,
        required : true
    },
    products : {
        type : String,
        ref : 'Product',
        required : true
    }
    
});

TransactionSchema.statics = {
	async getTransaction() {
		try {
			const transaction = await this.find({});
			return transaction;
		} catch (err) {
			return err;
		}
	}
};

const Transaction = mongoose.model('Transaction',TransactionSchema);

export default Transaction;

