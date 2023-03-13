const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
},
{
    collection:"Users"
})
mongoose.model("Users",UserSchema)