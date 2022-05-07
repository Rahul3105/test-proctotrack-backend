const mongoose = require("mongoose")
const AssignmentSchema = new mongoose.Schema(
    {
        id : {type: Number, required: true},
        start: {type : String, required: true}, 
        end: {type : String, required: true}, 
        group_id : {type : String, required: true} , 
        access_code: {type : String, required: true}, 
        name: {type : String, required: true}, 
        test_url:{type : String, required: true} , 
        duration : {type : String, required: true}, 
        attempts_allowed: {type : String, required: true}, 
        is_proctored:  {type : Boolean, required: true}, 
        is_onboarding : {type : Boolean, required: true}, 
        proctoring_level : {type : String, required: true},
        is_active: {type : Boolean, required: true}
    },{
        versionKey : false
    }
)
module.exports = mongoose.model("assignment", AssignmentSchema)