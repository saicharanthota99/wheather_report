function weatherinfo(event){
    //alert("connected")
    event.preventDefault();
    let inputValue = document.getElementById('info').value  // "".value" is used for store the values
    // alert(inputValue)


    let apiKey="4a268f089acdac45d35c2643785488ff";

   axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`)
   .then((result)=>{
    console.log(result);
    document.getElementById("display").innerHTML=`<h3>City:${result.data.name}</h3><h3>Temperature:${result.data.main.temp} <sup>0</sup>C</h3><p>Weather:${result.data.weather[0].description}</p><h2>sys:${result.data.sys.sunrise}</h2>`;
   })

   .catch(()=>{
    console.log("enter the error")
   })

}
