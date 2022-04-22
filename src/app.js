const express=require('express')
const path=require('path')
const geocode=require('./utils/test_geocode')
const test_html=require('./utils/test_html')
const weatherstack = require('./utils/test_weather')

var konumJson=geocode('Bursa')

const port=process.env.PORT||3000

const app=express()

app.get('/',(request,response)=>{

})
app.get('/test_text',(request,response)=>{
    
})
app.get('/test_html',(request,response)=>{
    
})
app.get('/homepage',(request,response)=>{
    
})
app.get('/test_geocode',(request,response)=>{
    konumJson=geocode('Bursa')
    console.log(konumJson)
})
app.get('/test_weather',(request,response)=>{
    const hava=weatherstack(konumJson.latitude,konumJson.longitude)
    console.log(hava)
})