function search(){
    city=cname.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5b4bee0ba241d092159faf007e166080`)
    .then(res=>res.json())
    .then(data=>displayIt(data))

 }

 function displayIt(locationDet){
    cname=locationDet.name
    temperat=Math.floor(locationDet.main.temp-273)
    weatherdes=locationDet.weather[0].description
    windsp=locationDet.wind.speed
    lati= locationDet.coord.lot
    longi= locationDet.coord.lon
    hum=locationDet.main.humidity
    tempmax=locationDet.main.temp_max
    tempmin=locationDet.main.temp_min

    citydatas=` <center>
    <h1 style="font-size: 100px; padding:10px; margin-left:10px;">${temperat}c</h1><br>
    <h2 style="font-size: 30px;">${cname}</h2>
</center>`

   desdata=`  <center>
    <h4 style="padding: 50px;font-size: 40px;">${weatherdes}</h4>
    <h4 style="padding: 50px;font-size: 20px;">wind speed ${windsp}</h4>
   </center>`

   cordidata=` <center>
   <h4 style="padding: 10px;">cordinates</h4>
   <h6>Longitude ${longi}</h6>
   <h6>Latitude ${lati}</h6>
       </center>`


   humdata=` <center>
   <h4 style="padding: 10px;">humidity</h4>
   <h6>${hum}</h6>
   </center>`    

   ranges=` <center>
   <h4 style="padding: 10px;">temperature range</h4>
   <h6>maximum ${tempmax}</h6>
   <h6>minimum ${tempmin}</h6>
   </center>`

   cit.innerHTML=citydatas
   temp.innerHTML=desdata
   last1.innerHTML=cordidata
   last2.innerHTML=humdata
   last3.innerHTML=ranges

   if(temperat<28){
    images=`<img class="centimg" src="./images/thunder.png" alt="">`
     pic.innerHTML=images
     document.getElementById("back").style.backgroundImage="url(images/rains.jpg)";
    }else{
        imago=`<img class="centimg" src="./images/sunny11.png" alt="">`
     pic.innerHTML=imago
     document.getElementById("back").style.backgroundImage="url(images/sunflower.jpg)";
    }

 }

 