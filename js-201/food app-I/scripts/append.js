let getdata = async (url) =>
    {

        let res= await fetch(url);
        let data= await  res.json()
         console.log(data.categories)
        // append(data.meals[0]);
        return data.categories
    }
    function append(data,cont)
    {
        data.forEach(element => {
            
        let img=document.createElement("img")
        img.src=element.strCategoryThumb;
        img.style.height="80%"
        img.style.width="100%"


       
        // let p=document.createElement("p")
        // p.innerText=element.strInstructions;

        let div=document.createElement("div")
        div.setAttribute("class","card")
       

        let p2=document.createElement("p")
        p2.innerText=`Category:${element.strCategory}`;

        div.append(img,p2)
       
        cont.append(div)
        });

        
    };
    
    export {getdata,append}