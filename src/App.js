import axios from "axios";
function app(){
  var cname=" "
  const myfun=(event)=>{
    event.preventDefault();
    document.getElementById("res1").innerHTML="<br> cityname:"+ cname

    var cityurl="https://api.openweathermap.org/data/2.5/weather?q="+cname+"&appid=00c15c581015780568f809b7a70ba19a"
    axios.get(cityurl).then((response)=>{
      document.getElementById("res2").innerHTML="WEATHER REPORT:"+response.data.weather[0].main
      document.getElementById("res3").innerHTML="WIND SPEED:"+response.data.wind.speed
    })
    .catch((error)=>{
      if(error.response)
        {
          alert("Give correct city name")
        }
    })
    }
     const addcity=(event)=>{
      cname=event.target.value
     }
return(
  <>
  <form onSubmit={myfun}>
    <h1><center>AXIOS HTTP IMPLEMENTATION -API HANDLING PURPOSE</center></h1>
  <center> <input type="text" onChange={addcity} placeholder="ENTER YOUR CITY HERE"></input><br></br></center>  
   <center> <input type="submit" value="FIND WEATHER REPORT"></input></center>
  </form>
  <div id="res1"></div>
  <div id="res2"></div>
  <div id="res3"></div>
  <div id="rse4"></div>
  </>
)
}
export default app
