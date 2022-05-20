const router = require("express").Router()
const Assignment = require ( "../models/Assignment.model.js")
const generateString = require("../utils/string_generator")
const authentication = require("../middlewares/authentication")
const start_assignment = require("../utils/start_assignment")
router.post("/start-assignment/:id", authentication, async (req, res) => {
    let {_id : mongoid, password, ...user} = req.user
    let assignment = await Assignment.findOne({id : req.params.id})
    
    let {_id, ...assignment_data} = assignment._doc;
    try {
        let url = await start_assignment(user, assignment_data)
        res.send(url)
    }catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
})

router.post("/register-assignment",authentication, async(req,res)=>{
    let user = req.user;
    if (user.role === "Instructor") {
        let assignment_data = req.body
        await Assignment.create(assignment_data)     
        res.json("Assignment created successfully")
    }else {
        res.json("You're not an instructor")
    }
})
router.get("/show-exam",async (req,res) => {
    let data = await Assignment.find()
    res.json(data)
})
router.get("/show-dashboard", async(req,res) => {
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
        let url = await start_assignment(user, assignment_data)
        res.redirect(url.url)
    }catch(err) {
        console.log(err.message)
        res.send(err.message)
    }
})
module.exports = router;


