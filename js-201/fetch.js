// let x=fetch()
// console.log(x)

const url="https://reqres.in/api/users";//destination

// process 1
// fetch(url)
// .then(function(value){
//   value.json().then(function(value)
//   {
//     console.log(value.data)
//   })
// })
// .catch(function(){

// })

// process-2


// fetch(url)
// .then(function(value){
//    return value.json();
// })
// .then(function(value)
// {
//     console.log(value.data)
// })
// .catch(function(){

// })


// process-3

async function getData()
{
    try
    {
        {
            let res= await fetch(url);
            let user= await res.json();
            append(user.data)
            console.log(user.data)
        }
    }catch(err){
        console.log(err)
    }
    
}


getData()



append(users.data)

function append(data)
{
    let container= document.getElementById("container")
    data.forEach(function(elem) {
        
        let img=document.createElement("img")
        img.src=elem.avatar;

        let card=document.createElement("div")
        let p=document.createElement("p")
        p.innerText=elem.first_name;

        card.append(img,p)
        container.append(card)
    });
}




