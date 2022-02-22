let ppts = [];
let drawing = false;
let mymouseDown = false;
let strokeColor = "black";
let lineWidth = 5;
let coord = { x: 0, y: 0 };
let lastX,
  lastY = 0;
let lastEvent;
let mouseDown = false;
let restore_array = [];
let index = -1;
let eraser = false;
let startPosition = { x: 0, y: 0 };
let eraser_width = 10;
let erasing = "false";
let pencilCoordinates = { x: 0, y: 0 };
let lineCoordinates = { x: 0, y: 0 };
let textCoordinates = { x: 0, y: 0 };
let pointCoordinates = { x: 0, y: 0 };
let crayonCoordinates = { x: 0, y: 0 };
let rectCoordinates = { x: 0, y: 0 };
let tool = "freedraw";
let strokeStyle = "black";
let crpts = [];

let coordWidth = 1;















// setup config variables and start the program
const drawArt=document.querySelector("#sketch-pad");
const canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");


//determine the height and the width of the canva
ctx.canvas.width = drawArt.clientWidth;
ctx.canvas.height = drawArt.clientHeight;
ctx.globalAlpha = 1;
ctx.lineWidth = linebarWidth();
//style of endcaps for a line
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.strokeStyle=colors();

ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height);




//tools eventListener
canvas.addEventListener("DOMContentLoaded", init);
document.querySelector("#line").addEventListener("click", line);
document.querySelector("#fill").addEventListener("click", fillColor);
document.querySelector("#points").addEventListener("click", drawPoints);
document.querySelector("#pencil").addEventListener("click", pencil);
document.querySelector("#crayon").addEventListener("click", crayon);
document.querySelector("#rectangle").addEventListener("click", rectangle);
document.querySelector("#circle").addEventListener("click", circle);
document.querySelector("#eraser").addEventListener("click", eraseImage);
document.querySelector("#clear").addEventListener("click", clearImage);
document.querySelector("#reload").addEventListener("click", reload);
document.querySelector("#save").addEventListener('click', SaveImage) ;
document.querySelector(".downloads").addEventListener("click", DownloadImage)



function init() {
    // initiating 2D context on it
    ctx.strokeStyle = strokeColor;
    if (tool === "crayon") {
      ctx.lineWidth = 10;
    } else {
      ctx.lineWidth = linebarWidth();
    }
}
    canvas.addEventListener("touchstart", start, false);
    canvas.addEventListener("mousedown", start, false);
    canvas.addEventListener("touchmove", draw, false);
    canvas.addEventListener("mousemove", draw, false);
    canvas.addEventListener("mouseup", stop, false);
    canvas.addEventListener("touchend", stop, false);
    canvas.addEventListener("mouseout", stop, false);
    window.addEventListener("resize", resize);
    
    resize();
    
    function resize() {
      ctx.canvas.width = window.innerWidth - 80;
      ctx.canvas.height = window.innerHeight - 80;
    }
    
    function reposition(event) {
      coord.x = event.clientX - canvas.offsetLeft;
      coord.y = event.clientY - canvas.offsetTop;
    }
    
    function start(event) {
      drawing = true;
      mymouseDown = true;
      canvas.addEventListener("mousemove", draw, false);
      canvas.addEventListener("touchmove", draw, false);
      reposition(event);
    }
    
    function stop() {
      drawing = false;
     
      canvas.removeEventListener("mousedown", draw, false);
      canvas.removeEventListener("mousemove", draw, false);
      canvas.removeEventListener("touchmove", draw, false);
    }
    
    function draw(event) {
      if (!drawing) return;
      if (drawing && mymouseDown) {
        //begins or resets a path
        ctx.beginPath();
       
        //specifies the current line width
        ctx.lineWidth = 5;
        //style of endcaps for a line
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        if (erasing == "true") {
          // ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.globalCompositeOperation = "destination-out";
        } else {
          ctx.globalCompositeOperation = "source-over";
        }
        //moves to specified point without creating a line
        ctx.moveTo(coord.x, coord.y);
        reposition(event);
        //adds anew point and creates a line from that point to the last specified point
        ctx.lineTo(coord.x, coord.y);
        //draws the path on to the canvas
        ctx.stroke();
        ctx.closePath();
        // ctx.font = "16px Arial";
        // // ctx.lineWidth = coordWidth;
        // let gradient = ctx.createLinearGradient(0, 0, c.width, 0);
        // gradient.addColorStop("0", "magenta");
        // gradient.addColorStop("0.5", "blue");
        // gradient.addColorStop("1.0", "red");
        // // Fill with gradient
        // ctx.fillStyle = gradient;
        // ctx.fillText("X: "+coord.x+", Y: "+coord.y, 10, 20,500);
      }
    
      lastX = coord.x;
      lastY = coord.y;
    
      event.preventDefault();
    }

 
/*************/
//PENCIL TOOL//
/***********/
function pencil(event){
	tool = "pencil";
       canvas.removeEventListener("mousemove", draw, false);
       canvas.removeEventListener("mousedown", draw, false);
	let mouse = { x: 0, y: 0};

	//Paint includes line width, line cap, and color
	drawPencil = function() {
		ctx.lineTo(mouse.x, mouse.y);
		ctx.lineWidth = lineWidthRange();
		ctx.lineJoin = 'round';
		ctx.strokeStyle = colors;
		ctx.stroke();
	};

	//Find mouse coordinates relative to canvas
	pencilMousemove = function(e){
		mouse.x = e.pageX - this.offsetLeft;
		mouse.y = e.pageY - this.offsetTop;
	};

	//User clicks down on canvas to trigger draw
	pencilMousedown = function(){
		ctx.beginPath();
		ctx.moveTo(mouse.x, mouse.y);
		canvas.addEventListener('mousemove', drawPencil, false);
	};

	//When mouse lifts up, line stops drawing
	pencilMouseup = function(){
		canvas.removeEventListener('mousemove', drawPencil, false);
	};

	//When mouse leaves canvas, line stops drawing
	pencilMouseout = function() {
		canvas.removeEventListener('mousemove', drawPencil, false);
	};

	//Event listeners that will trigger the paint functions when
	//mousedown, mousemove, mouseup, mouseout
	canvas.addEventListener('mousedown', pencilMousedown, false);
	canvas.addEventListener('mousemove', pencilMousemove, false);
	canvas.addEventListener('mouseup', pencilMouseup, false);
	canvas.addEventListener('mouseout', pencilMouseout, false);
	
}





/************** */
// CRAYON TOOL
/**************** */

function crayon(event) {
    tool = "crayon";
    canvas.removeEventListener("mousemove", draw, false);
    canvas.removeEventListener("mousedown", draw, false);
  
    ctx.globalAlpha = 0.4;
    lineWidth=15;
    let canvasPos = canvas.getBoundingClientRect();
    let dragging = false;

    canvas.addEventListener("mousedown", startCrayon, false);
    canvas.addEventListener("mouseup", stopCrayon, false);
    canvas.addEventListener("mousemove", drawCrayon, false);
  
    let lastPos = null;
  
    function startCrayon(e) {
        let pos = getCursorPosition(e);
        dragging = true;
        lastPos = pos;
    }
                
    function stopCrayon(e) {
        dragging = false;
        canvas.addEventListener("mousedown",startCrayon,false);
        canvas.addEventListener("mousedown",drawCrayon,false);
        
    }
    
    function drawCrayon(e) {
        var pos, i;
    
        if (!dragging) {
            return;
        }
        
        pos = getCursorPosition(e);
    
        if (lastPos) {
            ctx.strokeStyle = 'black';
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = 15;
            ctx.beginPath();
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(pos.x, pos.y);
            ctx.stroke();
        }
        
        lastPos = pos;
    }
    
    function getCursorPosition(e) {
        return {
            x: e.clientX - canvasPos.left,
            y: e.clientY - canvasPos.top
        };
    }
    
  }



/*********************** */
//Select Points Tool
/********************** */

function drawPoints(event) {
    tool = "points";
    let isstart = false;
    canvas.removeEventListener("mousemove", draw, false);
    canvas.removeEventListener("mousedown", draw, false);
    let pointSize = linebarWidth();
    console.log("in");
    canvas.addEventListener("mousedown", drawPointCoord, false);
    canvas.addEventListener("mousemove", drawCoordinates,false)
    canvas.addEventListener("mouseup", stop, false);
  
    function drawPointCoord(event) {
      getPosition(event);
    }
  
    function getPosition(event) {
      var rect = canvas.getBoundingClientRect();
      var x = event.clientX - rect.left;
      var y = event.clientY - rect.top;
      console.log(x, y);
      drawCoordinates(x, y);
    }
  
    function drawCoordinates(x, y) {
      ctx.fillStyle = fillColor(); // Red color
      ctx.beginPath();
      ctx.arc(x, y, pointSize / 2, 0, Math.PI * 2, !0);
      ctx.fill();
      ctx.closePath();
    }
    //  ctx.beginPath();
    //  //ctx.moveTo(b.x, b.y);
    //ctx.lineTo(b.x+50, b.y+50);
    //  tmp_ctx.arc(start_mouse.x, start_mouse.y, ctx.lineWidth / 2, 0, Math.PI * 2, !0);
    //  tmp_ctx.fill();
    //  tmp_ctx.closePath();
    //  // copy to real canvas
    //  ctx.drawImage(tmp_canvas, 0, 0);
  
    function stop() {
      canvas.removeEventListener("mousedown", drawCoordinates, false);
      canvas.removeEventListener("mousemove", drawCoordinates, false);
      canvas.removeEventListener("touchmove", drawCoordinates, false);
    }
  }




//**************** */
//SELECT FILL TOOL

/*****************/
function fillColor() {
    // Start a new path to begin drawing in a new color.
    ctx.closePath();
    ctx.beginPath();
    if (strokeStyle === "black" && strokeColor === "black") {
      strokeStyle = "white";
    }
    ctx.fillStyle = ctx.strokeStyle;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }



//Function to erase image
function eraseImage(event) {
    erasing = "true";
    tool = "eraser";
}


//function to change the strokeSize
function linebarWidth() {
    let widthLine = document.getElementById("myRange").value;
    return widthLine;
}


function SaveImage(){
 
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "image.png";
    link.click();
}
  
function OpenImage(){
  
        const reader = new FileReader();
        const img = new Image();
        
        
        const uploadImage = (e) => {
          reader.onload = () => {
            img.onload = () => {
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
            };
            img.src = reader.result;
          };
          reader.readAsDataURL(e.target.files[0]);
        };
      
      
        const imageLoader = document.getElementById("uploader");
        imageLoader.addEventListener("change", uploadImage);
 }  




function reload(){
    dataURL = canvas.toDataURL();
    var image = new Image();
              image.onload = function () {
                  ctx.drawImage(image, 0, 0);
              }
              image.src = dataURL;
}


function clearImage() {
    tool = "clear";
    // bind event handler to clear button
    ctx.beginPath();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
  