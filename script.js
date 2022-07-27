let   latitude, longitude="";

if(navigator.geolocation){
  
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
} 
else{
    alert("tarayıcınız konum bilgisini alamıyor...");
}

function onSuccess(position){
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
}

function onError(error){
    if(error.code==1){
        alert("kullanıcı erişim iznini reddetti.")
    }
    else if(error.code==2){
        alert("konum alınamadı");
    }
    else{
        alert("bir hata oluştu");
    }
}