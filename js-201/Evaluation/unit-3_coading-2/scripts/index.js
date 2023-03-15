let amount=700;
async function getdata()
{
    let url="https://grocery-masai.herokuapp.com/items";
    let res=await fetch(url);
    let Data=await res.json();
    console.log(Data.data)
    append(Data.data)
    // walletmoney(Data.data)

}
getdata()

function append(data)
{
    let container=document.getElementById("groceries");


    data.forEach(function(elem) {
        
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
        cart.innerText="Add To Cart";
        cart.setAttribute("class","add_to_cart")
        cart.addEventListener("click",function(){
            addToCart(elem)
        })


        let card=document.createElement("div");
        card.setAttribute("class","item");

        card.append(img,p1,p2,cart);
        container.append(card)
    });
}

function addToCart(data)
{
    let productData=JSON.parse(localStorage.getItem("cart_items"))||[];
    productData.push(data);
    localStorage.setItem("cart_items",JSON.stringify(productData))
    walletmoney(data)

   
}



function walletmoney(data)
{

    let money=document.getElementById("wallet");
    
    let amountData=[];
    amountData.push(data);
    amountData.forEach(function(elem){
      
        amount=amount-(elem.price);
       
        let h6=document.getElementById("wallet");
        h6.innerText=amount;
 
    })
    

    

}
