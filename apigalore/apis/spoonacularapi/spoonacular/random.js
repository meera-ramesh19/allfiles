function randomRecipe() {
  fetchData();
  document.querySelector('.next').addEventListener('click', () => next());
  document.querySelector('.back').addEventListener('click', () => back());
 }



const randomAPI =
  'https://api.spoonacular.com/recipes/random?apiKey=c4c96f58049e4dc89f038e2503edee89&number=10';

// function ready(callback => {
//   if (document.readyState !== 'loading') callback();
//   else document.addEventListener('DOMContentLoaded', callback);
// });
//
const extIngredients = [];
const instructions = [];
const dataArray = [];
let pointer = 0;

function preloadImage(url) {
  //equivalent to document.createElement('img')
  //constructor creates a new HTMLImageinstance
  const img = new Image();
  img.src = url;
}


async function fetchData() {

  try{
  const res=await fetch(randomAPI);
  if (res.status !== 200) {
    console.log(  `Looks like there was a problem. Status Code: ${response.status}`);
    }
  const data= await res.json();
  data.recipes.forEach(item=>{
    preloadImage(`https://spoonacular.com/recipeImages/${item.id}-636x393.jpg`);
     });
 dataArray.push(...data.recipes);
   appendData();
 document.getElementById("randomsRecep").scrollIntoView();
}  catch(err) {
      console.log('Fetch Error:-S', err);
    }
}


function next() {
  if (pointer === dataArray.length) {
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





function appendData() {
  //place this in the div class named randomData
  const appendCards = document.querySelector('.randomData');
  //inside the div display the cards
  appendCards.innerHTML = getCard(dataArray[pointer]);

}



function getCard(params) {
  var instructions=params.analyzedInstructions[0].steps
  console.log( instructions)
  return `

                <a href="#?id=${params.id}">
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

                    <ul class="tab">
   <li><a href="javascript:void(0)" class="tablinks" onclick="tabsclick(event, 'ingredients')">
     <img src="https://img.icons8.com/ios-glyphs/30/000000/ingredients--v1.png"/>

     </a></li>
   <li><a href="javascript:void(0)" class="tablinks" onclick="tabsclick(event, 'directions')">
     <img src="https://img.icons8.com/ios-filled/30/000000/cooking-pot.png"/>


     </a></li>
   <li><a href="javascript:void(0)" class="tablinks" onclick="tabsclick(event, 'time')">
     <img src="https://img.icons8.com/material-rounded/30/000000/time.png"/>

     </a></li>
   <li><a href="javascript:void(0)" class="tablinks" onclick="tabsclick(event, 'serving')">
     <img src="https://img.icons8.com/external-those-icons-fill-those-icons/27/000000/external-pie-chart-charts-infographic-those-icons-fill-those-icons-6.png"/>

     </a></li>
   <li><a href="javascript:void(0)" class="tablinks" onclick="tabsclick(event, 'nutrition')">
     <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/30/000000/external-nutrition-diet-and-nutrition-flatart-icons-solid-flatarticons.png"/>

     </a></li>
 </ul>
 <div id="ingredients" class="tabcontent">
    <h3><b>Ingredients: </b></h3>
   ${params.extendedIngredients.map(ingredient => `<li>${ingredient.name}</li>`).join('')}
   </div>
   <div id="directions" class="tabcontent">
     <h3><b>Directions: </b></h3>
       ${instructions.map(instruction => `<li>${instruction.step}</li>`).join('.')}
   </div>

   <div id="time" class="tabcontent">
     <h3><b>Esimated Time: </b></h3>
   </p>${params.readyInMinutes} </p>
   </div>
   <div id="serving" class="tabcontent">
     <h3><b>Servings: </b></h3>
     <p>${params.servings}</p>
   </div>
   <div id="nutrition" class="tabcontent">
     <h3><b>Nutritional Value: </b></h3>
     <p><i>Based on a 2000 calorie diet</i></p>
     <p>${params.summary}
   </div>
   </div>
  </div>
 </a>
`;
}



function tabsclick(evt, recipe) {

	var i, tabcontent, tablinks;

	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}


	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}


	document.getElementById(recipe).style.display = "block";
	evt.currentTarget.className += " active";

}
