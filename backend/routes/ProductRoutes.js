const controller = require("../controllers/ProductController")/* importing product controller */
const router = require('express').Router();/* importing router to creating routes for api call */

/* Router for crud operations */
router
.post('/add-product', controller.addProduct) /* add route */
.get('/product', controller.getProduct) /* get product route */
.delete("/product/:id", controller.deleteProduct) /* delete by id route */
.get("/product/:id", controller.findOneProduct) /* find by id route */
.put("/product/:id", controller.updateProduct)  /* update product by id*/
.get("/search/:key", controller.searchByKey) /* search by key the key can be anything */
module.exports = router;