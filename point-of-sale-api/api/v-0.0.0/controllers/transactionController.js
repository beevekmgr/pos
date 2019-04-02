import Transaction from '../models/Transaction';
import Product from '../models/Product';


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
		let specifications = []
		let actual = {}
		actual.date = req.body.date;
		for(let i = 0 ; i<req.body.specifications.length ; i++){
			await Product.findById(req.body.specifications[i].product)
			.then(actualproduct => {
				// console.log(actualproduct);
				if(!actualproduct){
					res.json({message : 'Product not found'});
				}else{
					specifications.push({
						product : req.body.specifications[i].product,
						quantity : req.body.specifications[i].quantity,
						price : req.body.specifications[i].price,
						discountPercent : req.body.specifications[i].discountPercent
					})
				}
			})
			.catch(err => {
				res.json({error : err})
			})
		}
		actual.specifications = specifications;
		actual.total = req.body.total;
		const transaction = new Transaction(actual);
		try {
			await transaction.save();
			res.json({ success: true , message : 'Transaction is saved', transaction, actual});
		} catch(error){
			res.json({success: false, message : 'Difficulty saving transaction', error});
		}	
	},
	async deleteTransaction(req,res) {
		const id = req.params.id;
		await Transaction.remove({_id : id})
		.exec()
		.then(result => {
			console.log(result);
			res.json({
				message: 'Deleted successfully',
				result : result
			});
		})
		.catch(err => {
			res.json({
				error : err
			})
		})
	}
};


export default transactionController;