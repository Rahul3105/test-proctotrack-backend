const register_user_to_assignment = require('./register_user_to_assignment')
const get_jwt_token = require("./get_jwt_token")


module.exports = async function  (user, assignment_data) {
    let jwt_token;
    // if (jwt_token !== null && new Date(jwt_token.expires_at) > new Date()){
    //     // use database token only
    //     jwt_token = jwt_token.token;
    //     console.log("valid")
    // }else {
    //     console.log("invalid")
    //     // get the token but first delete the exiting token
    //     if (jwt_token) {
    //         await Token.findByIdAndDelete(jwt_token.id)
    //         console.log("deleted")
    //     }
        let{ access_token }= await get_jwt_token()
        // await Token.create({"token" : access_token, "expires_at" :new Date(new Date().getTime() + 3*60000)})
        jwt_token = access_token;
    // }
    
    try {
        const res = register_user_to_assignment(user, assignment_data, jwt_token)
        return res 
    }catch(err) {
        console.log(err.message, "registation failed")
        return err.message
    } 
}
