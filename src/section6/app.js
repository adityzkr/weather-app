const request = require('request')
const { report } = require('process')
const geocode = require('./geocode')
const forecast = require('./forecast')
const address = process.argv[2]
// console.log(address)
if(!address){
    return console.log('Please provide an address')
}
//const url = 'https://api.darksky.net/forecast/6f18d8e9ca32c34684196466e89c8f44/37.8267,-122.4233'

// request({url:url},(error,response) => {
//     const data = JSON.parse(response.body)
//     console.log(data.currently);
// })
// request({url:url,json:true},(error,response) => {
//     if(error){
//         console.log('Unable to Connect to Server')
//     }else if(response.body.error){
//         console.log(response.body.error)
//     }
//     else{
//         console.log('It is currently '+response.body.currently.temperature+' degree out. There is a '+ response.body.currently.precipIntensity+' chance of rain')
//     }
//    // console.log(response.body.currently)
// })
// const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWRpdHlhMDciLCJhIjoiY2p6anExcXlnMGJuOTNjcWl5ZWg3cTJ0aSJ9.hfeggDrZ8MjF9P5yk5bRSw'
// request({url:geocodeurl,json:true},(error,response)=>{
//    if(error){
//         console.log('Unable to Connect to Server')
//    }else if(response.body.features.length === 0){
//         console.log('Unable to Find the location')
//    }
//     else{ 
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log(latitude + " " + longitude)
//     }
// })
// const geocode = (address,callback) =>{
//     const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?access_token=pk.eyJ1IjoiYWRpdHlhMDciLCJhIjoiY2p6anExcXlnMGJuOTNjcWl5ZWg3cTJ0aSJ9.hfeggDrZ8MjF9P5yk5bRSw'
//     request({url:url,json:true},(error,respose) =>{
//         if(error){
//             callback('Unable to Connect to Server',undefined)
//         }else if(respose.body.features.length === 0){
//             callback('Unable to Find the location',undefined)
//         }else{
//             callback(undefined,{
//                 latitude:respose.body.features[0].center[0],
//                 longitude:respose.body.features[0].center[1],
//                 location:respose.body.features[0].place_name
//             })
//         }
//     })
// }
// geocode('New Delhi',(error,data) => {
//     console.log('Error',error)
//     console.log('Data',data)
//     forecast(data.latitude, data.longitude, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })
// })
// geocode('New Delhi',(geoError,geodata) =>{
//     if(geoError){
//         return console.log(geoError)
//     }
//     console.log(geodata.longitude)
//     console.log(geodata.latitude)
//     console.log(geodata.location)
//     forecast(geodata.longitude,geodata.longitude),(error,forecastData) =>{
//         if(error){
//             return console.log(error)
//         }
//         console.log(forecastData)
//     }
// })
geocode(address,(geoError,geodata) =>{
    if(geoError){
        return console.log(geoError)
    }
    console.log(geodata.longitude)
    console.log(geodata.latitude)
    console.log(geodata.location)
    forecast(geodata.longitude,geodata.latitude),(error,forecastData) =>{
        if(error){
            return console.log(error)
        }
        console.log(forecastData)
    }
})