const mongoose = require("mongoose")
const tokenSchema = new mongoose.Schema(
    {
        token : {type : String, required : true},
        expires_at : {type: String, required : true}
    },{
        versionKey : false,
        timestamps : true
    }
)
module.exports = mongoose.model("token", tokenSchema)