const API_KEY="AIzaSyDfjUltpyUGccyOzgoCrZ2AUIGubYfxo50";



 let Search = async () =>
{
    try{
        let query=document.getElementById("query").value;
        let url=`https://youtube.googleapis.com/youtube/v3/search?part=%20snippet&maxResults=20&q=${query}&regionCode=IN&key=${API_KEY}`;
        
        let res= await fetch(url);
        let data= await res.json();
        getdata(data.items)
        // console.log(data.items)
    }
    catch(err)
    {
        console.log(error);
    }
   
};


//Append the data

 let getdata = (Data) =>
 {
     let container=document.getElementById("results");
     container.innerHTML=null;
    //  console.log(Data)
        Data.forEach(({ id: {videoId} , snippet: {title} }) => {
         
            // console.log(videoId)
            // console.log(title)
            let div = document.createElement("div");
            let iframe = document.createElement("iframe");
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
            iframe.allow = "fullscreen";
            let h3 = document.createElement("h3");
                h3.innerText = title;

                div.append(iframe, h3);

                let video = {
                          title,
                          videoId,
                        };
                    
                        div.onclick = () => {
                          playVideo(video);
                        };
                    


                container.append(div)




        });
 };

 let playVideo = (video) => {
     localStorage.setItem("video", JSON.stringify(video));
      window.location.href = "video.html";
    };








 /*
 <iframe width="560" height="315" 
 src="https://www.youtube.com/embed/9y5lG6Wxt0Y" 
 title="YouTube video player" 
 frameborder="0" 
 allow="accelerometer; autoplay; clipboard-write;
   encrypted-media; gyroscope;
   picture-in-picture" allowfullscreen>

 </iframe>
 */
