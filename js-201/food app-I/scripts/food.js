let getdata = async (url) =>
    {

        let res= await fetch(url);
        let data= await  res.json()
         console.log(data.meals[0])
        // append(data.meals[0]);
        return data.meals[0]
    }
    function append(data,cont,ins,area)
    {
       
            
        let img=document.createElement("img")
        img.src=data.strMealThumb;
        img.style.height="80%"
        img.style.width="100%"


       
        let p=document.createElement("p")
        p.innerText=data.strInstructions;

        
       

        let p2=document.createElement("p")
        p2.innerText=`Country:${data.strArea}`;

        ins.append(p)
        area.append(p2)
        cont.append(img)
        

        
    };
    
    export {getdata,append}