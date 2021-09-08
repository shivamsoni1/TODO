const express = require('express');
const route = require("./routes/Task")
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
app.use(bodyParser.json());


app.use((req,res,next) => {
 res.setHeader('Access-Control-Allow-Origin',"*");
 res.setHeader('Access-Control-Allow-Method',"DELETE,GET,POST,PUT,PATCH");
 res.setHeader('Access-Control-Allow-Headers',"Content-Type,Authorization");
 next();
})
app.use('/',route);
mongoose.connect('mongodb+srv://shivam_1996:Shivam_1996@todo.lsjkz.mongodb.net/Todo?retryWrites=true&w=majority',{
 
}).then(()=> {
app.listen(4000,()=>{
 console.log('listening at port 3000');
})
}).catch(err => console.log(err));
