async function SearchMovie()
{
    let query=document.getElementById("query").value
   try{
    
    let url=`https://www.omdbapi.com/?s=${query}&apikey=a1912c55`;

    let res=await fetch(url);
    let data=await res.json();
    append(data.Search);
   }
   catch(err)
   {
    let container=document.getElementById("container")
    let img=document.createElement("img")
    img.src="https://www.myphukettravel.com/assets/front-end/images/404.gif"
    let div1=document.createElement("div");
       
    div1.append(img)
    container.append(div1)
    
   }
   
}


function append(data)
{
    let container=document.getElementById("container")
    container.innerHTML=null
    data.forEach(function(element) {
        let div1=document.createElement("div");
        div1.setAttribute("id","movie")
       
        
        let img=document.createElement("img");
        img.src=element.Poster;
        img.style.height="auto";
        img.style.width="100%";
       
        
        let p=document.createElement("p")
        p.innerText=element.Title

        let p1=document.createElement("p")
        p1.innerText=element.Year;

        let p2=document.createElement("p")
        p2.innerText=element.Type;

        if(element.Year<=2000)
        {
            console.log(element)
            let p4=document.createElement("button")
            p4.innerText="OLD";
            p4.style.position="absolute"
            p4.style.borderRadius="5px"
            div1.append(img,p,p1,p2,p4)
            container.append(div1)
        }
        {}
        div1.append(img,p,p1,p2)
        container.append(div1)
    });
}