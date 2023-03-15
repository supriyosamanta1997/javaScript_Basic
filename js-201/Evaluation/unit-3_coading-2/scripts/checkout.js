
function onOrder()
{
   alert("Your order is confirmed");
   let sec=0;
   let id;
   id=setInterval(function(){
    sec=sec+1;
    if(sec===3)
    {
        alert("Your order is being Packed ")
    }
    if(sec===8)
    {
        alert("Your order is in transit")
    }
    if(sec===10)
    {
        alert("Your order is out for delivery")
    }
    if(sec===12)
    {
        alert(" Order delivered")
    }
    if(sec===13)
    {
        clearInterval(id)
    }

   },1000)
}