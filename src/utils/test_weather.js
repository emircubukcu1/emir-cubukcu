const { response } = require("express");
const request=require("request");
const weatherstack=(latitude,longitude)=>{
    const url="http://api.weatherstack.com/current?acces_key=62afc919f8cb1bfc13444678d444d656&query="+latitude+","+longitude+"&units=m";
    request({url:url},(error,response)=>{
        if(error){
            callback("Hata",undefined)
        }
        else{
            callback(undefined,{
                derece:response.body.current.tempature,
                basınc:response.body.current.pressure,
                nem:response.body.current.humidity
            })
        }
    })
}
module.exports=weatherstack