const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json());
const cors = require("cors");
app.use(cors);
const mongoUrl = "mongodb+srv://vaibhavirohilla741:stackmint@cluster0.uh2gopw.mongodb.net/test"

mongoose.connect(mongoUrl,{useNewUrlParser: true}).then(()=> {
    console.log("connected to database");

})
.catch((e)=> console.log(e));
 require("./user")
 const User = mongoose.model("Users")
app.post("/register", async(req,res)=>{
    const {fname,lname,email,password} = req.body;
    try{
        const oldUser = User.findOne({email});
        if(oldUser){
           return  res.send({error:"user exist"})
        }
        await User.create({
            fname,
            lname,
            email,
            password
        })
        console.log(User);
        res.send({satus:"ok"})
    }catch(error){
        res.send({status:"error"})

    }
    app.post("/login", async (req, res) => {
        const { email, password } = req.body;
      
        const user = await User.findOne({ email });
        if (!user) {
          return res.json({ error: "User Not found" });
        }
       
      
         res.send({status:"ok"})
      });
      
})
app.listen(5000,()=>{
    console.log("server started");
})