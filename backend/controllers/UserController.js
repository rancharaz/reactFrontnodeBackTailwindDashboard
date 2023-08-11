const User = require("../models/UserModel") /* model for user */


/* business logic structure */


/* Register */
exports.register =  async (req, res) => {
    let user = new User(req.body); /* get data */
    let result = await user.save();/* save user */
    /* remove password from response.data convert to object first */
    result = result.toObject();
    delete result.password
    /*  */
    res.send(result)
}



/* Login */
exports.login = async (req, res) => {

    /* if no password or email found */
    if (req.body.email && req.body.password ) {
        let user = await User.findOne(req.body).select("-password");/* find/search data by one remove password */
        /* if user exist send user data else no user found user contain the data that has been search up */
        if (user) {
            res.send(user);
        }
    } else {
        res.send({ result: "NO USER FOUND" })
    }
}
