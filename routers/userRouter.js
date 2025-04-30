const userRouter = require("express").Router();
const userModel = require("../models/userModel")

userRouter.post("/users", async(req, res) => {
    try {
        const user = new userModel({
            name: req.body.name,
            email: req.body.email,
            age: req.body.age,

        })
       await user.save()
        res.json({ message: "utilisateur bien créé", user: user })
    } catch (error) {
        console.log(error);
        res.json(error)
    }

})

userRouter.get("/users" , async(req,res)=>{
    try {
        const users = await userModel.find()
        res.json(users)
    } catch (error) {
        console.log(error);
        res.json(error)
    }
})


module.exports = userRouter