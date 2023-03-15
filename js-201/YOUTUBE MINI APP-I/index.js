const API_KEY="AIzaSyDfjUltpyUGccyOzgoCrZ2AUIGubYfxo50";


let Search= async () =>

{
    try{
        let query=document.getElementById("query").value;
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&maxResults=20&q=${query}&key=${API_KEY}`
        
        let res=await fetch(url)
        let data=await res.json()
        getdata(data.items)
        console.log(data.items)
    }
    catch(err)
    {
        console.log(error)
    }
   
}








let getdata = (Data) =>
 {
     let container=document.getElementById("results");
     container.innerHTML=null
    //  console.log(Data)
        Data.forEach(({ id: {videoId} , snippet: {title,thumbnails} }) => {
         
            // console.log(videoId)
            // console.log(thumbnails)
            let div = document.createElement("div");
            div.style.height="250px";
            div.style.border="1px solid gray";
            let video={
                title,
                videoId,
            };
            div.onclick = () => {
                playVideo(video);
              };
          

            let img=document.createElement("img");
            img.src=thumbnails.high.url;
            img.style.height="70%"
            img.style.width="100%"


            let iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}`;

            
            let h3 = document.createElement("h3");
                h3.innerText = title;
                h3.style.marginTop="-5px"

                div.append(img,h3);
                container.append(div);




        });
 };
 let playVideo = (video) =>
 {
    //  console.log("dfsa")
     localStorage.setItem("video",JSON.stringify(video))
     window.location.href="Video.html"
 }