const axios = require("axios")
require("dotenv").config()
module.exports =  async function (user, assignment_data, jwt_token) {
    try {
        let res = await axios.post(`https://in-testing.verificient.com/${process.env.PROCTORTRACK_ACCOUNT_ID}/provision/user/`, {
            "user" : user, "assignment_data" : assignment_data
        }, {
            headers : {
                "Authorization": `jwt ${jwt_token}`,  
                "header"  : 'Content-Type: application/json',  
                "Cookie": "multidb_pin_writes=y"
            }
        })
        console.log(res.data)
        return res.data
    }catch(err) {
        console.log(err)
       return err.message
    } 
}