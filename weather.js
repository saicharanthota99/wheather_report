function weatherinfo(event){
    event.preventDefault();
    let inputValue = document.getElementById('info').value  

    let apiKey="4a268f089acdac45d35c2643785488ff";

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`)
    .then((result)=>{
        console.log(result);
        
        let box = document.getElementById("display");
        box.style.display = "block";
        box.style.animation = "fadeIn 1s ease";

        box.innerHTML = `
            <h3>🌍 City: ${result.data.name}</h3>
            <h3>🌡 Temperature: ${result.data.main.temp}°C</h3>
            <p>⛅ Weather: ${result.data.weather[0].description}</p>
            <h3>🌅 Sunrise: ${result.data.sys.sunrise}</h3>
        `;
    })

    .catch(()=>{
        let box = document.getElementById("display");
        box.style.display = "block";
        box.style.animation = "fadeIn 1s ease";

        box.innerHTML = `<h3 style="color:red;">❌ City not found. Try again!</h3>`;
    })
}
