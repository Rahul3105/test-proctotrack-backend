const axios = require("axios");
const express = require("express");
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")
app.use(express.json())
require("dotenv").config()
app.use(cors())


const Assignment = require ( "./Assignment.model")
const Token = require("./Token.model")
const port = process.env.PORT || 4000
function connect_with_db () {
    return  mongoose.connect(`mongodb+srv://rahul:${process.env.MONGO_PASSWORD}@cluster0.rxiec.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)

}

function generateString(length) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

async function get_jwt_token () {
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


async function register_user_to_assignment (user, assignment_data, jwt_token) {
    
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
async function start_exam (user, assignment_data) {
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

app.post("/start-assignment", async (req, res) => {
    let user = req.body.user
    user.user_id = user.first_name + "@" + generateString(5)
    let assignment = await Assignment.findById(req.body.assignment_id)
    let {_id, ...assignment_data} = assignment._doc;
    
    try {
        let url = await start_exam(user, assignment)
        res.send(url)
    }catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
   
})

app.post("/register-assignment",async(req,res)=>{
    let user = req.body.user;
    let assignment_data = req.body.assignment_data
    await Assignment.create(assignment_data) 
    
    try {
        let url = await start_exam(user, assignment_data)
        res.send(url)
    }catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
})
app.get("/show-exam",async (req,res) => {
    let data = await Assignment.find()
    res.json(data)
})
app.get("/show-dashboard", async(req,res) => {
    let user = {
        "first_name" : "rahul",
        "last_name" : "rajput",
        "user_id" : "rahul952022",
        "email": "rahul@masaischool.com",
        "role" : "Instructor"
    };
    let assignment_data = {
        "id": 3857,
        "is_proctored": true,
        "is_onboarding": false,
        "is_active": true,
        "name": "Cohort-31 Module-3 Sprint Evaluation-3",
        "test_url": "https://oj.masaischool.com/contest/3857",
        "duration": "60",
        "attempts_allowed": "1",
        "proctoring_level": "3",
        "group_id": "3857",
        "access_code": "3857",
        "start": "2022-05-09T14:30:00.542Z",
        "end": "2022-05-09T15:45:00.542Z"
    } 
    try {
        let url = await start_exam(user, assignment_data)
        res.redirect(url.url)
    }catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
})


app.listen (port, async () => {
    await connect_with_db()
    console.log("listening on port 4000")
})