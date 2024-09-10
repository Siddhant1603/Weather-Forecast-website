import React ,{useRef,useState} from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
const Header=()=>{
    return(
    <div className='header'>
<h1 className='main-heading'>Weather Forecast</h1>
    </div>
    );
};

const Body=()=>{
  const[city,setcity]=useState("");
  const [weather,setweather]=useState();
  const onchange=(e)=>{
    setcity(e.target.value);

  }

const fetchweather=async()=>{
  try{
const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${'47e7e5a9af39ec984f2bce01723bc8ca'}`)
console.log(response);
setweather(response);
  }
  catch(error){
    console.log("error is ",error);

  }
}
  const handleclick=()=>{
    fetchweather();
  }
return(<div className='Body'>
 <div className='input-btn-field'>

 <input className='input-field' type='text' placeholder='Enter a City Name ...' value={city} onChange={onchange} ></input>

<button className='btn-field' onClick={handleclick}>Get Weather</button>

 </div>


{weather && (<>

<div className='main-data'>
<img  className='weather-icon' src={`http://openweathermap.org/img/wn/${weather.data.weather[0].icon}.png`} alt='weather icon'></img>
  <h1> City Name : {weather.data.name}</h1>
  <h3> Temperature is {Math.round(weather.data.main.temp-273.15)}℃</h3>
  <h3>Minimum Temperature is {Math.round(weather.data.main.temp_min-273.15)}℃</h3>
  <h3>Maximum Temperature is {Math.round(weather.data.main.temp_max-273.15)}℃</h3>

  <h3> Description : {weather.data.weather[0].description}</h3>
</div>
</>)}

</div>
 )
}


const Applayout = () => {
  return (
    <div className='layout'>
        <Header/>
    
       <Body/>


    </div>
  )
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Applayout/>);

export default Applayout; 