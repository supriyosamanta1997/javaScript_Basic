
   async function getdata(url)
   {
       let res= await fetch(url)
       let data= await res.json()
       
      return data
   }

   

   
function append(data,container)
{

   data.forEach(element => {
       let p= document.createElement("p");
       p.innerText=element.title;

       let img=document.createElement("img")
       img.src=element.image
        
       let div=document.createElement("div")

       div.append(img,p)
       container.append(div)
   });
};

export {getdata,append}