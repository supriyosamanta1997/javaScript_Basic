// Ude Import export (MANDATORY)
import navbar from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

let selecteddata = JSON.parse(localStorage.getItem("news"));
append(selecteddata);
function append(data) {
  let container = document.getElementById("detailed_news");
  container.innerHTML = null;
  data.forEach((element) => {
    let image = document.createElement("img");
    image.src = element.urlToImage;
    image.style.height = "65%";
    image.style.width = "100%";

    let p = document.createElement("p");
    p.innerText = element.description;

    let p2 = document.createElement("h3");
    p2.innerText = element.title;

    let div = document.createElement("div");
    div.setAttribute("class", "news");
    div.addEventListener("click", function () {
      showNews(element);
    });

    div.append(image, p2, p);
    container.append(div);
  });
}
