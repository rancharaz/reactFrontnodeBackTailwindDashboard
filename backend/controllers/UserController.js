const User = require("../models/UserModel") /* model for user */
const JWT  = require("jsonwebtoken")/* Jsonwebtoken for auth */

const jwtKey = 'daswetgsddfqw4'; /* token key */


/* business logic structure */


/* Register */
exports.register =  async (req, res) => {
    let user = new User(req.body); /* get data */
    let result = await user.save();/* save user */
    /* remove password from response.data convert to object first */
    result = result.toObject();
    delete result.password
    /*  */
    JWT.sign({result}, jwtKey,{expiresIn: "2h"}, (error, token) => {
        /* if error for token and user */
        if (error) {
            res.send({ result: "something went wrong, please try later." })
        }
        /* send user registered data and it's token */
        res.send({result, auth:token});
    })

}

/* Login */
exports.login = async (req, res) => {

    /* if no password or email found */
    if (req.body.email && req.body.password ) {
        let user = await User.findOne(req.body).select("-password");/* find/search data by one remove password */
        /* if user exist send user data else no user found user contain the data that has been search up */
        if (user) {
            /* token to auth */
            JWT.sign({user}, jwtKey,{expiresIn: "2h"}, (error, token) => {
                /* if error for token and user */
                if (error) {
                    res.send({ result: "something went wrong, please try later." })
                }
                /* send user and it's token */
                res.send({user, auth:token});
            })
            
        }
    } else {
        res.send({ result: "NO USER FOUND" })
    }
}
