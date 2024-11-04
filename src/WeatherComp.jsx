import { useState } from "react"
import axios from "axios"

function WeatherAPI()
{
    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [desc, setdesc] = useState("")

    const UpdateCity=(event)=>
    {
        setcity(event.target.value)
    }

    function weatherdetails()
    {     
        console.log(city)  
        var data = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04c35f735d4c0d8932ed296901a7e2f5`)
        
        data.then(function(userdata){
                setweather(userdata.data.weather[0].main)
                settemp(userdata.data.main.temp)
                setdesc(userdata.data.weather[0].description)})
            .catch(function(){console.log("Data not found")})
            
    }

    return(
        <div className="bg-black p-20">
            <div className="bg-sky-300 p-10 border rounded-md">
                <h1 className="text-2xl font-bold">Weather Report</h1>
                <p>I can give you a weather report about your city!</p>
                <div className="flex flex-col gap-5 mt-2">
                    <input onChange={UpdateCity} value={city} className="border border-black rounded-md p-2 w-52 h-10" type="text" placeholder=" Enter city name...." />
                    <button onClick={weatherdetails} className="bg-black text-white w-40 h-10 border rounded-md">Get Report</button>
                </div>
                <div className="flex gap-2 p-2 mt-2">
                    <h1 className="font-bold">Weather: </h1><p>{weather}</p>
                </div>

                <div className="flex gap-2 p-2 mt-2">
                <h1 className="font-bold">Temperature: </h1><p>{temp}</p>
                </div>

                <div className="flex gap-2 p-2 mt-2">
                <h1 className="font-bold">Description: </h1><p>{desc}</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherAPI