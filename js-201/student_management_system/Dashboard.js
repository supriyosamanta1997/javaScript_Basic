
function student(name,course,unit,image,batch){
    this.name=name;
    this.course=course;
    this.unit=unit;
    this.image=image;
    this.batch=`fw-${batch}`;
}

function storeData()
{
    event.preventDefault();
    let form=document.getElementById("form");
    let name=form.name.value;
    let course=form.course.value;
    let unit=form.unit.value;
    let image=form.img_url.value;
    let batch=form.batch.value;

    let s1=new student(name,course,unit,image,batch)

    let data=JSON.parse(localStorage.getItem("students")) || [];
    data.push(s1);
    localStorage.setItem("students",JSON.stringify(data));
    window.location.reload();
    // window.location.href="students.html"
}

let Data=JSON.parse(localStorage.getItem("students"));
console.log(Data)
let counter=0;
let sum=0
for(var i=0;i<Data.length;i++)
{
    // console.log(Data[i].batch)
    if(Data[i].batch=="fw-19")
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