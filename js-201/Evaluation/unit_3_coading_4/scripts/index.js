// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

async function getdata() {
  let url = "https://masai-api.herokuapp.com/news/top-headlines?country=in";
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
    p2.innerText = element.author;
    p2.style.marginLeft = "20px";

    let div = document.createElement("div");
    div.setAttribute("class", "news");
    div.addEventListener("click", function () {
      showNews(element);
    });

    div.append(image, p, p2);
    container.append(div);
  });
}

function showNews(element) {
  let newsdata = [];
  newsdata.push(element);
  console.log(element);
  localStorage.setItem("news", JSON.stringify(newsdata));
  window.location.href = "news.html";
}

document.getElementById("newsI").addEventListener("click", function () {
  newsIndia();
});
function newsIndia() {
  async function getnewsI() {
    let url = "https://masai-api.herokuapp.com/news/top-headlines?country=in";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.articles);
    append(data.articles);
  }
  getnewsI();
}

document.getElementById("newsC").addEventListener("click", function () {
  newsChina();
});
function newsChina() {
  async function getnewsC() {
    let url = "https://masai-api.herokuapp.com/news/top-headlines?country=ch";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.articles);
    append(data.articles);
  }
  getnewsC();
}

document.getElementById("newsN").addEventListener("click", function () {
  newsNewzeland();
});
function newsNewzeland() {
  async function getnewsN() {
    let url = "https://masai-api.herokuapp.com/news/top-headlines?country=nz";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.articles);
    append(data.articles);
  }
  getnewsN();
}

document.getElementById("newsU").addEventListener("click", function () {
  newsUSA();
});
function newsUSA() {
  async function getnewsU() {
    let url = "https://masai-api.herokuapp.com/news/top-headlines?country=us";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.articles);
    append(data.articles);
  }
  getnewsU();
}

document.getElementById("newsE").addEventListener("click", function () {
  newsUK();
});
function newsUK() {
  async function getnewsE() {
    let url = "https://masai-api.herokuapp.com/news/top-headlines?country=uk";
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.articles);
    append(data.articles);
  }
  getnewsE();
}

let search = document.getElementById("search_input");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    var company = e.target.value;
    async function getItem() {
      let url = `https://masai-api.herokuapp.com/news?q=${e.target.value}`;
      let res = await fetch(url);
      let Data = await res.json();
      console.log(Data.articles);
      localStorage.setItem("searchdata", company);
      window.location.href = "search.html";
    }
    getItem();
  }
});
