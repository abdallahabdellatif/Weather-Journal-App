
// Setup empty JS object to act as endpoint for all routes
 projectData = {};

// Require Express to run server and routes
const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
// Start up an instance of app
const app=express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port=8000;

const server=app.listen(port,listening);

function listening(){
    console.log('server running');
    console.log(`running on local host: ${port}`);
}

//get route
app.get('/',function(req,res){
    res.send(projectData);
    console.log('projectData');

    return projectData;
});
// app.get('/',function(req,res){
//     res.send('hello world');
// });
app.post('/',function(req,res){
let data=req.body;
projectData["temp"]=data.temp;
projectData["date"]=data.date;
projectData["feeling"]=data.feeling;
console.log(projectData)
});