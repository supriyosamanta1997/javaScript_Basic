// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let searchdata = localStorage.getItem("searchdata");
console.log(searchdata);

async function getdata() {
  let url = `https://masai-api.herokuapp.com/news?q=${searchdata}`;
  let res = await fetch(url);
  let data = await res.json();
  console.log(data.articles);
  append(data.articles);
}
getdata();

function append(data) {
  let container = document.getElementById("results");
  container.innerHTML = null;
  data.forEach((element) => {
    let image = document.createElement("img");
    image.src = element.urlToImage;
    image.style.height = "15%";
    image.style.width = "20%";

    let p = document.createElement("h3");
    p.innerText = element.title;

    let p2 = document.createElement("p");
    p2.innerText = element.description;

    let div = document.createElement("div");
    div.setAttribute("class", "news");
    div.addEventListener("click", function () {
      showNews(element);
    });

    div.append(image, p, p2);
    container.append(div);
  });
}

function showNews(elem) {
  let newsdata = [];
  console.log(elem);
  newsdata.push(elem);
  localStorage.setItem("news", JSON.stringify(newsdata));
  window.location.href = "news.html";
}

let searching = document.getElementById("search_input");
searching.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    async function get() {
      let url = `https://masai-api.herokuapp.com/news?q=${e.target.value}`;
      let response = await fetch(url);
      let data = await response.json();
      append(data.articles);
    }
    get();
  }
});
