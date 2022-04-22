const express=require('express')
const path=require('path')
const geocode = require('./utils/test_geocode')
const weatherstack = require('./utils/test_weather')

var konumJson=geocode('Bursa')

const port=process.env.PORT||3000

const app=express()

app.get('/',(request,response)=>{

})
app.get('/test_text',(request,response)=>{
    response.send("19360859052")
})
app.get('/test_html',(request,response)=>{
    response.send("<a>Emir Çubukçu</a>")
})
app.get('/test_json',(request,response)=>{
    response.send({
        "numara":"19360859052",
        "ad":"Emir",
        "soyad":"Çubukçu"
    })
})
app.get('/homepage',(request,response)=>{
    response.send('./utils/index.html')
})
app.get('/test_geocode',(request,response)=>{
    konumJson=geocode('Bursa')
    console.log(konumJson)
})
app.get('/test_weather',(request,response)=>{
    const hava=weatherstack(konumJson.latitude,konumJson.longitude)
    console.log(hava)
})
app.listen(port,()=>{
    console.log("Bağlandı")
},2000)