<<<<<<< HEAD
const papers = document.querySelector(".paper");
const rocks = document.querySelector(".rock");
const scissors = document.querySelector(".scissor");
const dispScore = document.querySelector(".results");

let score = 0;

// papers.addEventListener('click', compute(1));
// scissors.addEventListener('click',compute(2));
// rocks.addEventListener('click',compute(3));
const inputz = document.querySelector(".inputs");
//document.querySelectorAll('.imgPic').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })
inputz.addEventListener("click", (event) => {
  if (
    event.target !== papers &&
    event.target !== rocks &&
    event.target !== scissors
  ) {
    return;
  }
  const computer = Math.floor(Math.random() * 3 + 1);
  console.log("computer=" + computer);
  //handle click
  dispScore.innerHTML = "";
  const output = document.createElement("div");

  if (event.target === papers) {
    if (computer === 1) {
      console.log("draw");
      // const output = document.createElement("div");
      output.innerHTML = ` <div class="images">

      <div class="chose">
      <p> You choose: </p>
     <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
      </div>

      <div class="info">

          <p> Opponent chose:</p>
          <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
          </div>

         </div>
          <div class="gameScore">
          <p> The game is a draw</p>
          <p> Your  Score = ${score}</p>
          </div>`;
    } else if (computer === 2) {
      console.log("you win ");
      score++;
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
        <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
      </div>

      <div class="info">

      <p> Opponent chose:</p>
      <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
        </div>
        </div>
        <div class="gameScore">
        <p>You won the game</p>;
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 3) {
      console.log("you lose");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
        <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
      </div>


      <div class="info">

           <p> Opponent chose:</p>
          <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>
          </div>
          </div>
          <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    }
  } else if (event.target === rocks) {
    if (computer === 1) {
      console.log("you lose");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">

      <div class="chose">
      <p> You chose:</p>
       <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
      </div>
      <div class="info">

        <p>Opponent chose:</p>
        <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
         </div>

         </div>
         <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 2) {
      console.log("draw");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">

      <div class="chose">
      <p> You chose:</p>
       <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
      </div>

      <div class="info">

       <p> Opponent chose:</p>
       <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
        </div>
        </div>
        <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 3) {
      console.log("you win");
      score++;
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">

      <div class="chose">
      <p> You chose:</p>
     <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
      </div>

      <div class="info">

         <p> Opponent chose:</p>
        <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>
        </div>
        </div>
        <div class="gameScore">
          <p> You won the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    }
  } else if (event.target === scissors) {
    if (computer === 1) {
      console.log("you win");
      score++;
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
       <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>
      </div>


      <div class="info">
      <p> Opponent chose:</p>
         <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
         </div>

         </div>
         <div class="gameScore">
          <p> You won the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 2) {
      console.log("you lost");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
       <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>

      </div>

      <div class="info">
       <p> Opponent chose:</p>

         <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
         </div>

         </div>
         <div class="gameScore">
          <p> You won the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 3) {
      console.log("draw");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
       <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="50%;"/>
      </div>

      <div class="info">

         <p>  Opponent chose:</p>
         <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="50%;"/>
         </div>
         </div>
         <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    }
  }
  dispScore.appendChild(output);
});
=======
const papers = document.querySelector(".paper");
const rocks = document.querySelector(".rock");
const scissors = document.querySelector(".scissor");
const dispScore = document.querySelector(".results");

let score = 0;

// papers.addEventListener('click', compute(1));
// scissors.addEventListener('click',compute(2));
// rocks.addEventListener('click',compute(3));
const inputz = document.querySelector(".inputs");
//document.querySelectorAll('.imgPic').forEach(item => {
//   item.addEventListener('click', event => {
//     //handle click
//   })
// })
inputz.addEventListener("click", (event) => {
  if (
    event.target !== papers &&
    event.target !== rocks &&
    event.target !== scissors
  ) {
    return;
  }
  const computer = Math.floor(Math.random() * 3 + 1);
  console.log("computer=" + computer);
  //handle click
  dispScore.innerHTML = "";
  const output = document.createElement("div");

  if (event.target === papers) {
    if (computer === 1) {
      console.log("draw");
      // const output = document.createElement("div");
      output.innerHTML = ` <div class="images">

      <div class="chose">
      <p> You choose: </p>
     <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
      </div>

      <div class="info">

          <p> Opponent chose:</p>
          <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
          </div>

         </div>
          <div class="gameScore">
          <p> The game is a draw</p>
          <p> Your  Score = ${score}</p>
          </div>`;
    } else if (computer === 2) {
      console.log("you win ");
      score++;
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
        <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
      </div>

      <div class="info">

      <p> Opponent chose:</p>
      <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
        </div>
        </div>
        <div class="gameScore">
        <p>You won the game</p>;
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 3) {
      console.log("you lose");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
        <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
      </div>


      <div class="info">

           <p> Opponent chose:</p>
          <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>
          </div>
          </div>
          <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    }
  } else if (event.target === rocks) {
    if (computer === 1) {
      console.log("you lose");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">

      <div class="chose">
      <p> You chose:</p>
       <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
      </div>
      <div class="info">

        <p>Opponent chose:</p>
        <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
         </div>

         </div>
         <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 2) {
      console.log("draw");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">

      <div class="chose">
      <p> You chose:</p>
       <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
      </div>

      <div class="info">

       <p> Opponent chose:</p>
       <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
        </div>
        </div>
        <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 3) {
      console.log("you win");
      score++;
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">

      <div class="chose">
      <p> You chose:</p>
     <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
      </div>

      <div class="info">

         <p> Opponent chose:</p>
        <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>
        </div>
        </div>
        <div class="gameScore">
          <p> You won the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    }
  } else if (event.target === scissors) {
    if (computer === 1) {
      console.log("you win");
      score++;
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
       <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>
      </div>


      <div class="info">
      <p> Opponent chose:</p>
         <img class="rock imgPic" src="https://www.freepnglogos.com/uploads/rock-png/rock-png-transparent-images-download-clip-art-16.png"  alt="rock png transparent images download clip art" width="30%;" />
         </div>

         </div>
         <div class="gameScore">
          <p> You won the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 2) {
      console.log("you lost");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
       <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="30%;"/>

      </div>

      <div class="info">
       <p> Opponent chose:</p>

         <img class="paper imgPic"src="https://www.freepnglogos.com/uploads/paper-png/paper-download-scroll-png-transparent-image-and-clipart-15.png" alt="paper, download scroll png transparent image and clipart"  width="30%;"/>
         </div>

         </div>
         <div class="gameScore">
          <p> You won the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    } else if (computer === 3) {
      console.log("draw");
      // const output = document.createElement("div");
      output.innerHTML = `<div class="images">
      <div class="chose">
      <p> You chose:</p>
       <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="50%;"/>
      </div>

      <div class="info">

         <p>  Opponent chose:</p>
         <img class="scissor imgPic" src="https://www.freepnglogos.com/uploads/scissors-png/scissors-png-clip-art-image-gallery-yopriceville-high-13.png"  alt="scissors png clip art image gallery yopriceville high"  width="50%;"/>
         </div>
         </div>
         <div class="gameScore">
          <p> You lost the game</p>
          <p> Your Score = ${score}</p>
          </div>`;
    }
  }
  dispScore.appendChild(output);
});
>>>>>>> c3003537796af047d1904c4c4d6faed899c09c31
