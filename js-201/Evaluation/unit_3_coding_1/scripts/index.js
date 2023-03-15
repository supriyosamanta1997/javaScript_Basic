//store the products array in localstorage as "data"

function nikeData(brand,name,price,image)
{
    this.brand=brand;
    this.name=name;
    this.price=price;
    this.image=image;
}

function productsData()
{
    event.preventDefault();
    let form=document.getElementById("product_form");
    let brand=form.product_brand.value;
    let name=form.product_name.value;
    let price=form.product_price.value;
    let image=form.product_image.value;


    let p1= new nikeData(brand,name,price,image);
    console.log(p1)

    let productdata=JSON.parse(localStorage.getItem("data")) || [];
    productdata.push(p1)
    localStorage.setItem("data",JSON.stringify(productdata))
    window.location.reload();
}


function showproducts()
{
    window.location.href="inventory.html"
}
