const axios = require("axios")
module.exports =  async function (user, assignment_data, jwt_token) {
    
    try {
        let res = await axios.post("https://preproduction.verificient.com/G7A1VD03JE7MBBOJ6Q4O/provision/user", {
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