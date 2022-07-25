const express = require('express');
const cors = require('cors');
const { connectDB } = require('./database/index');
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT || 4000;
const app = express();
app.use(cors());
app.use(express.json());
const Notes = require("./models/notes");


app.post('/notes',(req, res)=>{
    console.log(req.body);
    const user = new Notes(req.body);
    user.save().then(()=>{
       res.status(201).send(user);
    })
})

app.get('/',(req,res)=>{
    res.send("Hello Backend")
})

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server started on port ${port}`);
    })
});

