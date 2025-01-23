const express = require("express");

const app = express();

app.post('/user/signup', (req , res)=>{
    const email = req.body.email;
    const password = req.body.password;
    res.json({
        message: "signup endpoint"
    })
})

app.post('/user/signin', (req , res)=>{
    
})

app.post('/course/purchase',(req ,res) => {

})
app.get('user/purchases', (req , res)=>{
    
})
app.get('/courses', (req , res)=>{
    
})
const port = 3000;

app.listen(port, () => {
    console.log(`Port is Running on ${port}`);
})