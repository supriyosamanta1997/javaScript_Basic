// let 
    import {navbar} from "../components/navbar.js"
    let navbardata=document.getElementById("navbar")
    navbardata.innerHTML=navbar()

    import {searchImages,append} from "./fetch.js"


    let search = async  (e) => {
        if (e.key === "Enter") {
            let query= document.getElementById("query").value
          let data= await searchImages(query);
          console.log(data)
          let container = document.getElementById("container");
          container.innerHTML=null
          append(data.results,container)
        }
      };
      
      document.getElementById("query").addEventListener("keydown", search);


      let categories=document.getElementById("category").children;
      for (let el of categories) {
        el.addEventListener("click", hello);
      }
      
      async function hello() {
        let data= await searchImages(this.id);
        console.log(data)
        let container = document.getElementById("container");
        container.innerHTML=null
        append(data.results,container)
      }
        
      
    // async function searchImages()
    // {
    //     let query= document.getElementById("query").value
        
    // }
