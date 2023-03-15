 let studentInfo=JSON.parse(localStorage.getItem("students"));

displayData(studentInfo)
function displayData(data){

document.querySelector("tbody").innerHTML = "";

data.forEach(function(elem,index) {
   
    let tr=document.createElement("tr");

    let td1=document.createElement("td");
    td1.innerText=elem.name;

    let td2=document.createElement("td");
    td2.innerText=elem.course;

    let td3=document.createElement("td");
    td3.innerText=elem.unit;

    let td4=document.createElement("td");
    let student_avatar=document.createElement("img");
    student_avatar.setAttribute("src",elem.image)
    td4.append(student_avatar);
    td4.style.width="15%";
    student_avatar.style.width="100%";
   



    let td5=document.createElement("td");
    td5.innerText=elem.batch;




    let td6=document.createElement("td")
    td6.innerText="Remove";
    td6.style.color="red";
    td6.style.cursor="pointer"
    td6.addEventListener("click",function(){
        deleteItem(elem,index)
    })

    tr.append(td1,td2,td3,td4,td5,td6)
    document.querySelector("tbody").append(tr)
});
}

function deleteItem( elem,index)
{
    let deletedata= JSON.parse(localStorage.getItem("trash")) || [];
   let sdata= studentInfo.splice(index,1);
    localStorage.setItem("students",JSON.stringify(studentInfo));
window.location.reload()


    deletedata.push(sdata)
    console.log(deletedata)
    localStorage.setItem("trash",JSON.stringify(deletedata));



    let updatedData = JSON.parse(localStorage.getItem("students"));
     displayData(updatedData);
}

console.log(studentInfo)
let counter=0;
let sum=0
for(var i=0;i<studentInfo.length;i++)
{
    // console.log(Data[i].batch)
    if(studentInfo[i].batch=="fw-19")
    {
        counter++
    }
    else{
        sum++
    }
    
}
console.log(counter)
console.log(sum)
let studentno=document.getElementById("card2");
studentno.append(`Batch-19:-${counter} | Batch-18:-${sum}`)