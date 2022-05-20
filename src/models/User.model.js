const mongoose = require("mongoose")
const userSchema = new mongoose.Schema(
    {
        first_name : {type:String, required: true},
        last_name : {type:String, required :false},
        user_id : {type:String, unique : true, required: true},
        email :{type:String, unique : true, required: true},
        role : {type:String,  required: true},
        password : {type:String,  required: true}
     },{
        versionKey : false
    }
)
module.exports = mongoose.model("user", userSchema)