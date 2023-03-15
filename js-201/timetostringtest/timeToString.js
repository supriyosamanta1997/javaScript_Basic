let timeToString=(time)=>
{
  
  if(time%1000==0)
  {
    let Time=time/1000;
    if(Time>60)
    {
        let min=Time/60;
        if(min>60)
        {
            let sec=min/60
        }
    }
    else{
        let second=Time
    }
    return Time+"second"+min+"minuit"+sec+"secon"
}
  
}