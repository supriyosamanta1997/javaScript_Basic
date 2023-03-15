let productLSData=JSON.parse(localStorage.getItem("data")) || [];
append(productLSData)
function append(Data)
{
    let container=document.getElementById("products_data")


    Data.forEach(function(elem,index) {
         
        let img=document.createElement("img");
        img.src=elem.image;
        img.style.height="60%"
        img.style.width="100%";
      


        let p1=document.createElement("p");
        p1.innerText=elem.brand;
        p1.style.width="40%";
        p1.style.margin="auto"

        let p2=document.createElement("p");
        p2.innerText=elem.name;
        p2.style.width="40%";
        p2.style.margin="auto"

        let p3=document.createElement("p");
        p3.innerText=elem.price;
        p3.style.width="40%";
        p3.style.margin="auto";


        

        let div1=document.createElement("div");
        div1.setAttribute("id","card");


        let remove=document.createElement("button")
        remove.setAttribute("id","button")
        remove.innerText="Remove Product";

        remove.addEventListener("click",function(){
            removeData(elem,index)
        })

        div1.append(img,p1,p2,p3,remove)
        container.append(div1)

    });
}



function removeData(elem,index)
{
    productLSData.splice(index,1);
    localStorage.setItem("data",JSON.stringify(productLSData))
    window.location.reload();
}


function add_products()
{
    window.location.href="index.html"
}