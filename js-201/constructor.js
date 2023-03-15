 function Product (type){
     this.type=type,
    this.brand="Nike",
    this.logo="URL",
    this.saller="Flipkart"
}
Product.prototype.changeType= function( type) {
this.type=type;
}
Product.prototype.price=1000;
let p1=new Product("Shoe");

console.log(p1);

p1.changeType("t-shirt");
console.log(p1);