import Transaction from '../models/Transaction';

const transactionController = {
	async getTransaction(req, res) {
		try {
			const transaction = await Transaction.getTransaction();
			console.log(transaction);
			res.json({ success: true, transaction });
		} catch (error) {
			res.json({ success: false, message: 'error' });
		}
	},
	async addTransaction(req, res) {
		console.log(req.body)
        const data = req.body;
		const transaction = new Transaction(data);
		try {
			await transaction.save();
			res.json({ success: true, message: 'Transaction saved successfully', data });
		} catch (error) {
			console.log(error);
			res.json({ success: false, message: 'difficulty saving transaction' , error });
		}
	}
};

export default transactionController;