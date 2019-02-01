import User from '../models/User';
import validateLogin from '../helpers/validateLogin';
import validateRegister from '../helpers/validateRegister';
// class userController {}

const userController = {
	async login(req, res) {
		const data = req.body;
		const errors = validateLogin(data);
		const { username } = data;
		const doesUserExists = await User.userExists(username);

		if (Object.keys(errors).length > 0) {
			res.json({ success: false, errors });
			return;
		}

		if (!doesUserExists) {
			res.json({ success: false, errors: { mainError: "'user/password error' " } });
			return;
		}
		User.findOne(data, ('name', 'username'), (err, user) => {
			if (err) {
				res.json({ success: false, errors: { mainError: "'Error in sever' " } });
			} else {
				if (user) {
					res.json({ success: true, user, token: user.generateToken() });
				} else {
					res.json({ success: false, errors: { mainError: "'user/password error' " } });
				}
			}
		});
	},
	async create(req, res) {
		const data = req.body;
		const errors = validateRegister(data);
		if (Object.keys(errors).length > 0) {
			res.json({ success: false, errors });
			return;
		}
		const { username } = data;
		const doesUserExists = await User.userExists(username);
		console.log(username, doesUserExists);
		if (doesUserExists) {
			res.json({ success: false, errors: { mainError: "'User already exists' " } });
			return;
		}
		const user = new User({
			name : req.body.name,
			username : req.body.username,
			password : req.body.password,
			userImage : req.file.path,
			role : req.body.role
		});
		user.save((err) => {
			if (err) {
				console.log(err);
				res.json({ success: false, errors: { mainError: "'Error in server' " } });
			} else {
				res.json({ success: true, user });
			}
		});
	},

	getAllUsers(req, res) {
		User.find({}, (err, user) => {
			res.json(user);
		});
	}
};

export default userController;
