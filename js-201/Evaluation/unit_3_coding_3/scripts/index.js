let input=document.getElementById("query");
input.addEventListener("keyup",(event) => {
    if(event.keyCode ===13)
    {
        
        let query=event.target.value;
        let url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${query}`
        getdata(url)
    }




   
})


async function getdata(url)
{
    let res=await fetch(url);
    let data=await res.json()
    
    let hotelArr=data.hotels
    console.log('hotelArr',hotelArr)
    append(data.hotels)

//     // sorting----------------

// // 1.low to hogh

// let lowtohigh=document.getElementById("sort_lth");
// lowtohigh.addEventListener("click",low_to_high)
//     function low_to_high()
//     {
//         console.log("clicked?")
//     }
}

function append(Data)
{
    let container=document.getElementById("hotels_list");

    Data.forEach((elem) => {
        console.log(elem)
        
        let image=document.createElement("img");
        image.src=elem.Images.one;
        image.style.height="70%";
        image.style.width="100%"

        let h5=document.createElement("h5");
        h5.innerText=elem.Title;

        let p1=document.createElement("p");
        p1.innerText=`Price Per Room:Rs.${elem.Price}`


        let p2=document.createElement("p");
        p2.innerText=`Ac.${elem.Ac}`

        let p3=document.createElement("p");
        p3.innerText=`Rating.${elem.Rating}`


        let button=document.createElement("button");
        button.setAttribute("class","book")
        button.innerText="Book Now";
        button.addEventListener("click",function()
        {
            Booking(elem)
        })

        let div1=document.createElement("div")
        div1.setAttribute("id","hotel")
         div1.append(image,h5,p1,p2,p3,button)
        container.append(div1)
    });
}

function Booking(data)
{
    
    localStorage.setItem("hoteldata",JSON.stringify(data))
    window.location.href="checkout.html"
}


