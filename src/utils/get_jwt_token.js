const axios = require("axios")

module.exports =  async function () {
    let res;
    try {
        res = await axios.post(`https://preproduction.verificient.com/G7A1VD03JE7MBBOJ6Q4O/jwt/access_token/`,{
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
