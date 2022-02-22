const form=document.querySelector("form").addEventListener("click", preventMyDefault);

function preventMyDefault(event) {
  // event.preventDefault();
  
  getPhotos();
}


//Start of function to clear out data from input form

function clearField() {
  document.querySelector("#startDate").value=""
  document.querySelector("#endDate").value=""
}

async function getPhotos() {
  
  try {

    const startChoice = document.querySelector("#startDate").value
    const endChoice = document.querySelector("#endDate").value
 
    const url = "https://api.nasa.gov/planetary/apod?api_key=OCWcgLEbNe0Wkwa4H4T152e9OsTGjIRuhPcnUIlQ&start_date="+startChoice+"&end_date="+endChoice;
          
          const res=await fetch(url)
          const data= await res.json()
          console.log(data);

          for(let i=0;i<data.length;i++){
            createColumnCards(data[i]);
          }
         //run clear field function
          // clearField()

          //when code is rendered scroll to ideal location for user
             document.getElementById("header").scrollIntoView()
          } catch (err) {
            console.log(err)
          }


}
   
    
   

  function createColumnCards(dataInfo){
    document.querySelector("#result").innerHTML="";
    let todayDate = dataInfo.date;
    let title = dataInfo.title;
    let urls = dataInfo.url;
    let explain = dataInfo.explanation;
    let mediaType = dataInfo.media_type;
    let hdImage = dataInfo.hdurl;
    let videoUrl='';
    console.log("mediaType" + mediaType);
    
     document.querySelector("#header").innerHTML = `Dates Ranging from ${startChoice} through ${endChoice}`
     document.querySelector("#result").insertAdjacentHTML("beforeend",
    ` <section class="displayContainer">
      <section class="mediaContainer">
            <div class="video">
               ${ mediaType==="image"
                 ? `<img src=${hdImage} alt="Nasa Image of the Day"/>`
               : mediaType === "video"
                  ? videoUrl = parseVideo(urls)
                 : videoUrl==="youtube" ?` <iframe class="youtubeClass" width="560" height="315" src=${hdImage} frameborder="0" allowfullscreen></iframe>`
                 : videoUrl==="vimeo"?`<iframe class="vimeoClass" src=${hdImage} width="640" height="360" frameborder="0"  allowfullscreen></iframe>` 
                  :""
                }
          </div>
           </section>
        <section class="info">
             <div class="text">
             <img class="image" src=${hdImage} alt="Nasa Image of the Day"/>
              <h5 class="dated">${todayDate}</h5>
              <h4 class="title">${title}</h4>
               <p class="exp">${explain}</p>
             </div>
          </section>
      </section>` )  
   }
  
            // if (mediaType === "image") {
            //      console.log("image" + hdImage);
            //      cument.querySelector("img").src = hdImage;
            //      document.querySelector(".vimeoClass").src = "";
            //      document.querySelector(".youtubeClass").src = "";
            //  } else if (mediaType == "video") {
            //      // let result.innerHTML += "<br>--<br>Provider: " + video.provider + "<br>ID: " + video.id;
            //       let videoUrl = parseVideo(data[i].url);
            //        console.log("url" + data[i].url);
            //       if (videoUrl.type === "youtube") {
            //           console.log("Hit youtube" + data[i].url);
            //           document.querySelector(".youtubeClass").src = data[i].url;
            //        } else {
            //            console.log("Hit vim" + data[i].url);
            //            document.querySelector(".vimeoClass").src = data[i].url;
            //        }
            //   }

          // document.querySelector("h5").innerHTML = `Dated : ${todayDate}`;
          // document.querySelector(".title").innerHTML = title;
          // document.querySelector("h3").innerHTML = explain;

            // }
          // return setTimeout(function () {
          //   rotate(i - 1);
          // }, 5000);
      //   }
      // }
      // rotate(data.length - 1);
      // let delay = 5000;
      // let len = data.length - 1;
      // for (let i = 0; i < len; i++) {
      //   setTimeout(display(i), delay * i);
      // }
    // })
    // .catch((err) => {
    //   console.log(`error  ${err}`);
    // });
       

function parseVideo(url) {
  // - Supported YouTube URL formats:
  //   - http://www.youtube.com/watch?v=My2FRPA3Gf8
  //   - http://youtu.be/My2FRPA3Gf8
  //   - https://youtube.googleapis.com/v/My2FRPA3Gf8
  // - Supported Vimeo URL formats:
  //   - http://vimeo.com/25451551
  //   - http://player.vimeo.com/video/25451551
  // - Also supports relative URLs:
  //   - //player.vimeo.com/video/25451551

  url.match(
    /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
  );

  if (RegExp.$3.indexOf("youtu") > -1) {
    var type = "youtube";
  } else if (RegExp.$3.indexOf("vimeo") > -1) {
    var type = "vimeo";
  }

  return {
    type: type,
    id: RegExp.$6
  };
}
