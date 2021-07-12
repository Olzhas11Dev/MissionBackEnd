const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const port  = 5000

// connect mongoose
mongoose.connect('mongodb+srv://olzhas:mission4@cluster0.exnnn.mongodb.net/missionDB?retryWrites=true&w=majority',
{ 
    useNewUrlParser: true ,
    useUnifiedTopology: true
})

//data Schema
const studentsSchema = {
    firstName: String,
    familyName: String,
    tasks:[
        {id:Number,completed:Boolean},
    ]
}

//data Model
const Students = mongoose.model('Students',studentsSchema)    //SHOULD BE THE SAME NAME AS IN MONGO

//read route
app.get('/',function(req,res){
    Students.find()
    .then(items => res.json(items))
    .catch(err => res.status(400).json('Error '+ err))
})

//listen
app.listen(port,function(){
    console.log(`you use ${port}`)
})