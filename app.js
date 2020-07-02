const forecast = require('./utils/forecast')
const geocode= require('./utils/geocode')

// const url= 'http://api.weatherstack.com/current?access_key=15557e4e78b6423d80ecf631708ad07e&query=12.9716,77.5946&units=f'

// request({ url: url,json: true}, (error,response)=> {
//     if (error)
//         console.log("Unable to reach to weather service")
//     else if(response.success===false)
//         console.log(response.error.info)
//     else
//     console.log(response.body.current.weather_descriptions[0] + ". The current temp of Bangalore is " + response.body.current.temperature + " but it feels like " + response.body.current.feelslike)
// })

geocode (process.argv[2],(error,data)=>{
    if(error)
        return console.log(error)
    forecast(data.latitude,data.longitude,data.location,(error,forecastData)=> {
        if (error)
            return console.log(error)
        console.log('Data', forecastData)
    })
})

//const location=process.argv[2]





