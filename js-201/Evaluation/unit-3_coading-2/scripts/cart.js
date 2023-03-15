let productData=JSON.parse(localStorage.getItem("cart_items"))||[];

append(productData)
totalAmount(productData)


function totalAmount(data)
{
    let amount=document.getElementById("cart_total");
    let sum=0;
    data.forEach(function(elem){
        sum=sum+(elem.price);  
    });
    let h5=document.createElement("h2");
    h5.innerText=sum;
    h5.style.marginTop="2px"

    amount.append(h5);
    console.log(sum)
}



function append(data)
{
    let container=document.getElementById("cart")

    data.forEach(function(elem,index) {
        

        let img=document.createElement("img");
        img.src=elem.image;
        img.style.height="65%";
        img.style.width="100%";


        let p1=document.createElement("p");
        p1.innerText=elem.name;
        p1.style.textAlign="center";

        let p2=document.createElement("p");
        p2.innerText=elem.price;
        p2.style.textAlign="center";


        let cart=document.createElement("button");
        cart.innerText="Remove";
        cart.setAttribute("class","remove")
        cart.addEventListener("click",function(){
            removeData(elem,index)
        })


        let card=document.createElement("div");
        card.setAttribute("class","item");

        card.append(img,p1,p2,cart);
        container.append(card)
    });
}


function removeData(elem,index)
{
    productData.splice(index,1)
    localStorage.setItem("cart_items",JSON.stringify(productData));
    window.location.reload()
}