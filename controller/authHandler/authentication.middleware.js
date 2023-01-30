
const jwt = require('jsonwebtoken');
const ConfigObj = require('../config/core.config');


class Authenticate {
    constructor(props) {
        
    }
    generateToken = (data) => {
       
        if (data)
            return jwt.sign(data, ConfigObj.jwt_secret, { expiresIn: '1800s' });
        else
            return false;
    }

    authenticateToken = (req, res, next)=> {
        console.log("authenticateToken",req.files);
        
        const authHeader = req.headers['Authorization']?req.headers['Authorization']:req.headers['authorization'];
        
        const token = authHeader ? authHeader.split(' ')[1] : null;

        var user_id = req.query['userid']?parseInt(req.query['userid']):req.body['userid']?parseInt(req.body['userid']):null;

        if(!user_id || user_id == null){
            return res.send(this.response(false, "send user id for authentication" ,[], 403));
        }
        if(!token){
            return res.send(this.response(false, "please send token" ,[], 401));
        }

        //jwt verify function
        jwt.verify(token, ConfigObj.jwt_secret, (err, user) => {
           
            if(err){
                return res.send(this.response(false, "authentication fail" ,err, 403));
            }

            if(user.user_id ==  user_id){

                next();

            }else{
                return res.send(this.response(false, "authentication fail" ,err, 403));
            }
            
        })
    }

    response = (success, message, data = null, status = 200) => {
        
        return {
            success: success,
            message: message,
            data: data ? data : 'no data',
            status:status
        }
    }
}

module.exports = new Authenticate()