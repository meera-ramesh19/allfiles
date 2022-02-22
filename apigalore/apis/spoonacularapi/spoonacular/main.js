const random=document.querySelector('#submit');
const result=document.querySelector('result');

random.addEventListener('click',function(e){
  e.preventDefault()

  requestedRecipe=document.querySelector('input').value;
  let selectInputs = document.querySelectorAll("#mealType");
  let res = [];
  selectInputs.forEach((input) => {
      res.push(input.value);
    });

      getRandomRecipe(requestedRecipe,res);
      document.querySelector('.next').addEventListener('click', () => next());
      document.querySelector('.back').addEventListener('click', () => back());
  })


function clearField() {
  document.querySelector("input").value = ""
  changeInput(input, 'placeholder', 'Type a food or a meal...')
  document.querySelector('#meal-type').selectedindex=0;

}


function resetInput(input) {
  setTimeout(() => {
    changeInput(input, 'placeholder', 'Type a food or a meal...')
  }, 3000)
}
function changeInput(input, prop, value) {
  input[prop] = value
}

 function changeTextButton(button, text) {
   button.textContent = text
 }

 const dataArray = [];
 let pointer = 0;

 function preloadImage(url) {
   const img = new Image();
   img.src = url;
 }




 function getCard(params) {
  return `
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
            `;
 }

 function appendData() {
  const appendCards = document.querySelector('.randomData');
  appendCards.innerHTML = getCard(dataArray[pointer]);
 }

 function getRandomRecipe(recipe,res) {

   fetch(` https://api.spoonacular.com/recipes/random?apiKey=b384c1dbb2b2468181829e99308c714a&number=20`)
     .then((res) =>{
     if (res.status !== 200) {
       console.log(
         `Looks like there was a problem. Status Code: ${response.status}`
       );
       return res.json();
     })
    
    .then((data) => {
       data.recipes.forEach(item=>{
         preloadImage(
            `https://spoonacular.com/recipeImages/${item.id}-636x393.jpg`
          );
       })
       dataArray.push(...data.recipes);
       appendData();
      });
     })
     .catch(function(err) {
      console.log('Fetch Error :-S', err);
    });

 }

 function next() {
   if (pointer === dataArray.length - 4) {
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
