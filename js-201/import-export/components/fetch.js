async function getdata(url) {
  let res = await fetch(url);
  let data = await res.json();
  return data;
}

function append(data, container) {
  data.forEach((element) => {
    let img = document.createElement("img");
    img.src = element.image;
    container.append(img);
  });
}

export { getdata, append };
