const mongoose = require('mongoose'); /* intiate mongodb via mongoose */

/* model for table data */
const productSchema = new mongoose.Schema({
       name: String,
       price:String,
       category:String,
       userId:String,
       company:String
     
})
module.exports = mongoose.model("products", productSchema); /* table and  model schema data*/