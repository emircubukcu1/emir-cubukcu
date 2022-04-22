const request=require("request")
const address="Bursa"

const geocode=(address)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?acces_token=pk.eyJ1IjoiY3VidWtjdWVtaXIiLCJhIjoiY2wxZXFqeDd5MGR0NDNkcnRsNTQzOWFkayJ9.t2fh6Pn9OClsJpkcDR83pA";
    request({url:url ,json:true},(error,response)=>{
        if(error){
            callback("<a>Hata</a>",undefined)
        }
        else{
            callback(undefined,{
                latitude:response.body.features.center[0],//Kontrol et sonra
                longitude:response.body.features.center[1],
            })
        }
    })   
}
