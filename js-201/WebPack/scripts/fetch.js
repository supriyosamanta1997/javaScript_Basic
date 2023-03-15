let searchImages= async (query)=>
{
    try{
        let url=`https://api.unsplash.com/search/photos/?query=${query}&per_page=20&client_id=tfW2n-HIkAf-0Eqs6Dq6V6sNxQoVAYrgGIQNyw-CfWQ`

        let res= await fetch(url)
        let data= await res.json()
        // console.log(data)
        return data
    }
    catch(err)
    {
        console.log(err)
    }
};

let append= (data,container)=>
{
    
        // let container = document.getElementById("container");
        // container.innerHTML = null;
        data.forEach(({alt_description,urls:{small}}) => {
          let div = document.createElement("div");
          div.setAttribute("class", "image");

          let img = document.createElement("img");

          let h3 = document.createElement("h3");
      
          img.src = small;
          h3.innerText = alt_description;
      
          div.append(img, h3);
          container.append(div);
        });
      
}
export {searchImages,append}