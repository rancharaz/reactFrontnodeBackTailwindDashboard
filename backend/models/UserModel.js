const mongoose = require('mongoose'); /* intiate mongodb via mongoose */

/* model for table data */
const userSchema = new mongoose.Schema({
       name: String,
       email:String,
       password:String
     
})
module.exports = mongoose.model("users", userSchema); /* table and  model schema data*/