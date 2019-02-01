const jwt = require('jsonwebtoken');
import { security } from '../constants';


module.exports = (req,res,next) => {
    const token = req.headers.token;
    try{
        const decoded = jwt.verify(token, security.Secret);
        next();
    }catch(err){
        res.status(401).json({
            message: "Auth Failed"
        })
    }
}