const controller = require("../controllers/ProductController")/* importing product controller */
const router = require('express').Router();/* importing router to creating routes for api call */
const verify = require("../middleware/middleware") /* middleWare for Json web token */


/* Router for crud operations */
/* verify.verifyToken = token verification for operation */
router
.post('/add-product', verify.verifyToken, controller.addProduct) /* add route */
.get('/product', verify.verifyToken, controller.getProduct) /* get product route */
.delete("/product/:id",verify.verifyToken, controller.deleteProduct) /* delete by id route */
.get("/product/:id",verify.verifyToken, controller.findOneProduct) /* find by id route */
.put("/product/:id",verify.verifyToken, controller.updateProduct)  /* update product by id*/
.get("/search/:key", verify.verifyToken, controller.searchByKey) /* search by key the key can be anything */
module.exports = router;