const axios = require("axios")
require("dotenv").config()
module.exports =  async function () {
    let res;
    try {
        res = await axios.post(`https://in-testing.verificient.com/${process.env.PROCTORTRACK_ACCOUNT_ID}/jwt/access_token/`,{
            "client_id" :   process.env.PROCTORTRACK_CLIENT_ID,
            "client_secret" : process.env.PROCTORTRACK_CLIENT_SECRET
        })
        console.log(res.data)
        return res.data
    }catch(err) {
        console.log(err.message,23)
        return err.message
    }
}
