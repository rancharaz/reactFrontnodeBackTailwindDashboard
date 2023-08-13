/* MIDDLEWARE FOR JWT FOR VERIFICATION -> ROUTING */

const JWT  = require("jsonwebtoken")/* Jsonwebtoken for auth */
const jwtKey = 'daswetgsddfqw4'; /* token key */

/* middleware token verification */
exports.verifyToken = (req, res, next) => {
    /* getting the headers */
    let token = req.headers['authorization'];
    /* getting the token from the headers from bearer */

    if(token){
        token = token.split(" ")[1]; /* split bearer */
        console.log("Middleware", token); /* token */
        /* verify token */
        JWT.verify(token, jwtKey, (err, valid) => {
            if(err){
                res.status(404).send({ result: "Please provide valid token with header"})
            } else {
                next();
            }
        });
    } else {
        res.status(401).send({ result: "Please add token with header"})
    }
 
}