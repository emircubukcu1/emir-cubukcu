const request=require("request")

const geocode=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?acces_token=pk.eyJ1IjoiY3VidWtjdWVtaXIiLCJhIjoiY2wxZXFqeDd5MGR0NDNkcnRsNTQzOWFkayJ9.t2fh6Pn9OClsJpkcDR83pA";
    request({url:url ,json:true},(error,response)=>{
        if(error){
            callback("Hata",undefined)
        }
        else{
            callback(undefined,{
                latitude:response.body.features.center[0],//Kontrol et sonra
                longitude:response.body.features.center[1],
            })
        }
    })   
}
module.exports=geocode