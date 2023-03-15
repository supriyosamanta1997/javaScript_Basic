let hoteldetails=localStorage.getItem("hoteldata")
console.log(hoteldetails)
append(hoteldetails)
function append(data)
{
 
    let container=document.getElementById("hotel_details");

    
        
        // let image=document.createElement("img");
        // image.src=data.Images.one;
        // image.style.height="100%";
        // image.style.width="100%";

        // let image1=document.createElement("img");
        // image1.src=data.Images.one;
        // image1.style.height="100%";
        // image1.style.width="100%";


        // let div1=document.createElement("div");
        // div1.setAttribute("class","hotel");

        // let div2=document.createElement("div")
        // div2.setAttribute("class","hotel")


        let h5=document.createElement("h5");
        h5.innerText=data.Title;
        // div1.append(image)
        // div2.append(image1)
        container.append(h5)
    
}