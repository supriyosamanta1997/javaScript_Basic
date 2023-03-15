const Api_key="6078a73ccaa9fc5e39ceaf67d773da87";

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

async function getData(lat,lon)
{
    let city=document.getElementById("city").value;

    //  let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_key}`;
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${Api_key}`

    // console.log(url);

    let res= await fetch(url);
    let data=await res.json();
    append(data);
    console.log(data)

}





function append(data)
{
    let container=document.getElementById("container") ;
    container.innerHTML="";

  
    // console.log(elem)

    let h3=document.createElement("h3");
    h3.innerText=data.name;

    let p1=document.createElement("p");
    p1.innerText=`Current temp:${data.main.temp}`

    let div2=document.createElement("div")
    div2.style.height="20px"
    div2.style.width="30px"
    div2.style.border="1px solid red";

    let span1=document.createElement("span")
    let div1=document.createElement("div")
    div1.style.height="20px"
    div1.style.width="30px"
    div1.style.border="1px solid red";

    let p2=document.createElement("p");
    p2.innerText=`Maximum temp:${data.main.temp_max}`
   

    let p3=document.createElement("p");
    p3.innerText=`Minimum temp:${data.main.temp_min}`
    // let icon=document.createElement("i");
    // icon.setAttribute("class","fa-solid fa-sun-cloud")

    container.append(h3,p1,p2,p3)

    let iframe=document.getElementById("gmap_canvas");
    iframe.src=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    iframe.style.width="100%"
}



//src="https://maps.google.com/maps?q=Pune&t=&z=13&ie=UTF8&iwloc=&output=embed"





function getLocationWeather() {
    navigator.geolocation.getCurrentPosition(success);
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      getData(latitude, longitude);
  
      console.log(latitude);
      console.log(longitude);
    }
  }

  getLocationWeather()