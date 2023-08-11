const Product = require("../models/ProductModel");/* model for products */

/* business logic structure */


/* add product function logic */
exports.addProduct = async (req, res) => {
    let product = new Product(req.body); /* get data store here */
    let result = await product.save();/* save data */
    res.send(result); /* send data */
}

/* get product function logic */
exports.getProduct = async (req, res) => {
    let products = await Product.find(); /* everything is in the products variable */
    /* check if product show else show result  */
    if (products.length > 0) {
        res.send(products);
    } else {
        res.send({ result: "No products found" })
    }
}
/* delete product by id logic */
exports.deleteProduct = async (req, res) => {
    let result = await Product.deleteOne({ _id: req.params.id });/* delete one by id, from the request id */
    res.send(result); /* send deleted */
}
/* get product by id one */
exports.findOneProduct = async (req, res) => {
    let result = await Product.findOne({ _id: req.params.id });/* find one by id */
    /* if there is something in the result id show result else not found */
    if (result) {
        res.send(result)
    } else {
        res.send({ result: "Product not found" })
    }
}

/* update data */
exports.updateProduct = async (req, res) => {
    /* update by id and data that is being updated req.body*/
    let result = await Product.updateOne({ _id: req.params.id }, { $set: req.body });
    /* $set operator you can change the value for a field or even assign new fields to a document */
    res.send(result); /* send updated data */
}
/* search by key means everything */
exports.searchByKey = async (req, res) => {
    let result = await Product.find({
        /* or can search into below */
        "$or": [
            {name: {$regex:req.params.key}},
            {price: {$regex:req.params.key}},
            {category: {$regex:req.params.key}},
            {company: {$regex:req.params.key}}

        ]
    });
    res.send(result)
}