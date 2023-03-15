


    let Search = async (url) =>
    {

        let res= await fetch(url);
        let data= await  res.json()
        console.log(data.meals[0])
        append(data.meals[0]);



        function append(data)
        {
            let cont=document.getElementById("container")
            let ins=document.getElementById("div1")
            let area=document.getElementById("div2")
            cont.innerHTML=null;
            ins.innerHTML=null;
            area.innerHTML=null;

        //    console.log(data)
                let img=document.createElement("img")
                img.src=data.strMealThumb;
                img.style.height="100%"
                img.style.width="100%"
    

               
                let p=document.createElement("p")
                p.innerText=`origin=${data.strInstructions}`;


               

                let p2=document.createElement("p")
                p2.innerText=`Country=${data.strArea}`;


                ins.append(p)
                area.append(p2)
                cont.append(img)
          
        }
    }

   

    export default Search
