import navbar from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();

import { getdata, append } from "../components/fetch.js";

let url = "http://fakestoreapi.com/products/category/jewelery";
let cont = document.getElementById("container");
console.log(getdata(url));
getdata(url).then((res) => {
  console.log(res);
  append(res, cont);
});
