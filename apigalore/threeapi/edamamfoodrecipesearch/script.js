// form = document.querySelector('form')


// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     inpVal = e.target.querySelector('input').value;
//     console.log(inpVal)
//     app_id = 'd8feb9b1';
//     app_key = 'cd9cb2390f98fe12e951f5df71d0b41e';
//     fetchValue();
// })

// async function fetchValue() {
//     baseUrl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&to=4`

//     resp = await fetch(baseUrl)
//     data = await resp.json();
//     console.log(data.hits)
//     generateHTML(data.hits)
// }

// function generateHTML(results) {
//     showinHTML = '';
//     results.map(result => {
//         showinHTML += `
//         <div class="col-3 my-3">
//         <div class="card">
//             <div class="card-body">
//                 <img src="${result.recipe.image}" alt="" class='img-fluid'>
//                 <h6 class=' text-center my-2
//                 text-truncate '>${result.recipe.label}</h6>
//                 <div class="d-flex justify-content-between align-items-center">
//                     <h6 class=' align-self-stretch mx-auto my-auto'>Calories: ${result.recipe.calories.toFixed(2)}</h6>
//                     <a href='${result.recipe.url}' class='btn btn-link align-self-stretch'>View Recipe</a>
//                 </div>
//             </div>
//         </div>
//     </div>
//         `;
//     })
//     document.querySelector('#showRecipe').innerHTML = showinHTML
// }

function clearField() {
  document.querySelector("form").value = ""
}

function submitForm(ev) {
form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector('input').value
    let selectInputs = document.querySelectorAll("select");
    let res = [];
    selectInputs.forEach((input) => {
        res.push(input.value);
      });
    fetchData4mAPI(inpValue,res)
})
}
async function fetchData4mAPI(inpVal,res) {
  // console.log(res);
    app_id = '41c4b815';
    app_key = 'd550506821dc3eab02ba5bc7fe0cfaad	';
    try{
    baseURl = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&mealType=${res[0]}`;
    //&health=${res[1]} &diet=${res[3]}&to=4
    const foodItem = await fetch(baseURl)
     const foodItemData = await foodItem.json()
     console.log(foodItemData)
    // generateHTML(datas.hits);
    for(let j = 0; j < foodItemData.hits.length; j++){
       createIngredients(foodItemData.hits);
     }

     clearField()
   }catch(err){
     console.log(err)
   }
}

const createIngredients = (results) => {
    // function genrateHRML(results){
  // console.log(results.recipe.ingredientLines)
  // const ingredients = []
  // const len=results.recipe.ingredientLines.length;
  // const hLabels =[]
  // const lengs=results.recipe.healthLabels.length;

  for (let i = 0; i <20 ; i++) {
    if (results.recipe.ingredientLines[`${i}`]) {
      ingredients.push(results.recipe.ingredientLines[`${i}`])

    } else {
         break
      }
  };



   for (let h = 0; h <35; h++) {
      if (results.recipe.healthLabels[`${h}`]) {
        hLabels.push(results.recipe.healthLabels[`${h}`])

      } else {
           break
        }
    };


    // showINHTML = '';
    //   results.map(result => {
    //     // console.log(result)
    //       showINHTML += `
     document.querySelector("#showRecipe").insertAdjacentHTML("beforeend", `
     <div class="card-container">

         <div class="card-details">
           <div class="card-info">
               <h3 class="card-title">${result.recipe.label}</h3>
             <p class="cuisine"><strong>CUISINE:</strong>${result.recipe.cuisineType}</p>
              <p class="cuisine">SOurce:${result.recipe.source}</p>
            <p class="cuisine">Type of dish:${result.recipe.dishType}</p>
              <p class="cuisine">Total Calories:${ result.recipe.calories.ToFixed(2)}</p>
            </div>
             <div class="card">
               <img src="${result.recipe.image}" alt="Avatar" style="width:100%">
             </div>
           </div>
           <div class="servings-time">
                   <span class="time">Total time:${result.recipe.totaltime}</span>
                   <span class="time">Servings:${result.recipe.yield}</span>
           <div>
         <div class="container">
             <p class="health">Health Labels:</p>

            ${hLabels.map(hLabel => `<li> ${hLabel} </span>`).join(',')}
          </div>
           <div class="ingredients">
             <h4><b>Ingredients</b></h4>
            <div class="card-ingredients">

              ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </div>
           </div>
           <ul class="recipe-card__nav">
            <a href="nutrition.html" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
           <a href="${meal.recipe.url}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
       </ul>

         </div>  `
        // document.querySelector('#showRecipe').innerHTML = showINHTML;

    })
}
