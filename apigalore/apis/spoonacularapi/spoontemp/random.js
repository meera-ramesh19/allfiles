

const randomAPI =
  'https://api.spoonacular.com/recipes/random?apiKey=c4c96f58049e4dc89f038e2503edee89&number=10';

// function ready(callback => {
//   if (document.readyState !== 'loading') callback();
//   else document.addEventListener('DOMContentLoaded', callback);
// });
//
const dataArray = [];
let pointer = 0;

function preloadImage(url) {
  //equivalent to document.createElement('img')
  //constructor creates a new HTMLImageinstance
  const img = new Image();
  img.src = url;
}

function getCard(params) {
  return `
  <div
    class="text-white mt-0 border border-blue-800 py-0 w-full h-full"
    style="background-image:url('orange.jpg')"
  >
    <section id="hero" class="container flex h-screen mx-auto w-full">
      <div
        class="flex flex-col items-center justify-center md:text-left text-center text-white w-full"
      >

        <div class="flex h-screen">
          <button
            class="self-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded back"
          >
            BACK
          </button>
  <a href=/single.html?id=${params.id}>
                  <div
                    class="bg-white relative shadow p-2 rounded-lg text-gray-800 hover:shadow-lg"
                  >
                  <div
                      class="right-0 mt-4 rounded-l-full absolute text-center font-bold text-xs text-white px-2 py-1 bg-orange-500"
                    >
                      ready in ${params.readyInMinutes} minutes
                    </div>
                    <img
                      alt=""
                      src = "https://spoonacular.com/recipeImages/${params.id}-636x393.jpg"
                      class="rounded-lg w-full object-cover"
                    />
                    <div class="py-2 px-2">
                      <div class="my-3 font-bold font-title text-center">
                        ${params.title}
                      </div>
                    </div>
                  </div>
                </a>
                <button
                  class="self-center bg-blue-500 hover:bg-blue-400 text-white font-bold py-4 px-6 border-b-4 border-blue-700 hover:border-blue-500 rounded next"
                >
                  NEXT
                </button>
              </div>
            </div>

            `;
}

function appendData() {
  //place this in the div class named randomData
  const appendCards = document.querySelector('.randomData');
  //inside the div display the cards
  appendCards.innerHTML = getCard(dataArray[pointer]);
}

function fetchData() {
  fetch(randomAPI)
    .then(response => {
      if (response.status !== 200) {
        console.log(`Looks like there was a problem. Status Code: ${response.status}`  );
      }
        return response.json();
      })
      // Examine the text in the response
      .then(data => {
        data.recipes.forEach(item => {
          preloadImage(  `https://spoonacular.com/recipeImages/${item.id}-636x393.jpg`  );
        });
        dataArray.push(...data.recipes);
        appendData();
      });

    .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

}


function next() {
  if (pointer === dataArray.length - 1) {
    fetchData();
  }
  pointer += 1;
  appendData();
}

function back() {
  if (pointer === 0) {
    return;
  }
  pointer -= 1;
  appendData();
}

function random(){
  console.log('random data')
  fetchData();
  document.querySelector('.next').addEventListener('click', () => next());
  document.querySelector('.back').addEventListener('click', () => back());
 }
