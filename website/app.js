/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

///////////////////
const baseU='http://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const apiKey='efad5bcaf5702f9e086b0ebb8250221f';
// console.log(zip);


const getWeather= async (baseU,zip,apiKey)=> {
    //TODO
    const res= await fetch(baseU+zip+'&appid='+apiKey);
    try{
        const data=await res.json();
        console.log(data);//process data?
        return data;
    }
    catch(error){
        console.log("Ops, ",error);
    }
}

////////////post
const postData = async ( url = '', data = {})=>{

    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    credentials: 'same-origin', 
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      console.log(newData+'post,client')
      return newData
    }catch(error) {
    console.log("Ops, ", error);
    // appropriately handle the error
    }
}

//chaininggg
// retrieveData('/')

document.getElementById('generate').addEventListener('click',doStuff)
function doStuff(e){
    const zip=document.getElementById('zip').value;
    const feelings=document.getElementById('feelings').value;
    let temp;
    getWeather(baseU,zip,apiKey)
    .then(function(data){
        console.log(data);
        postData('/',{date:newDate,feeling:feelings,temp:data.main.temp})
        //updateUI
        document.getElementById('date').innerText ='Date:'+ newDate;
        document.getElementById('content').innerText = 'You feel like:'+feelings;
        document.getElementById('temp').innerText ='Temprature: '+ data.main.temp;
    })

      
}
    //update UI
    const changeDisplay = async () => {
        const request = await fetch('/');
        try{
          const myData = await request.json();
        //   console.log(myData);

      
        }catch(error){
          console.log("Ops, ", error);
        }
      }