


function submitForm(ev) {
form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    inpValue = e.target.querySelector("input").value
    let selectInputs = document.querySelectorAll("select");
    let res = [];
    selectInputs.forEach((input) => {
        res.push(input.value);
      });
    getRecipe(inpValue,res);
})
}


function clearField() {
  document.querySelector("input").value = ""
    // changeInput(input, 'placeholder', 'Type a food or a meal...')
    // document.querySelector('#meal-type').selectedindex=null;
      // document.querySelector('#meal-type').value="";
}

function changeInput(input, prop, value) {
  input[prop] = value
}




async function getRecipe(inpVal,res) {
  document.querySelector("#showRecipe").innerHTML = ""

  app_id = '41c4b815';
  app_key = 'd550506821dc3eab02ba5bc7fe0cfaad	';
  try{
  url = `https://api.edamam.com/search?q=${inpVal}&app_id=${app_id}&app_key=${app_key}&mealType=${res[0]}`;
    const foodItem = await fetch(url)
    const foodItemData = await foodItem.json()
    // console.log(foodItemData)

    for(let j = 0; j < foodItemData.hits.length; j++){
      createIngredients(foodItemData.hits[j])
    }

    clearField()
  } catch (err) {
    console.log(err)
  }
}

const createIngredients = (meal) => {
  console.log(meal.recipe)
  const ingredients = []
  const healthy = []
  for (let i = 0; i <= 20; i++) {
    if (meal.recipe.ingredientLines[`${i}`]) {
      ingredients.push(meal.recipe.ingredientLines[`${i}`])

    } else {
         break
      }
  }


  for (let h = 0; h <= 35; h++) {
    if (meal.recipe.healthLabels[`${h}`]) {
    healthy.push(meal.recipe.healthLabels[`${h}`])

    } else {
         break
      }
  }

  showRecipe(meal,healthy,ingredients);
}

function showRecipe(meals,healthy,ingredients){
  document.querySelector("#showRecipe").insertAdjacentHTML("beforeend",`
   <div class="card-container">
     <div class="card-wrapper">
      <div class="card-details">
        <div class="card-info">
           <h3 class="card-title">${meals.recipe.label}</h3>
           <p class="cuisine"><strong>CUISINE:</strong>${meals.recipe.cuisineType}</p>
           <p class="cuisine">SOurce:${meals.recipe.source}</p>
           <p class="cuisine">Type of dish:${meals.recipe.dishType}</p>
           <p class="cuisine">Total Calories:${ meals.recipe.calories.toFixed(2)}</p>
           <p class="time">Total time:${meals.recipe.totalTime}</p>
           <p class="servings">Servings:${meals.recipe.yield}</p>
         </div>
          <div class="card-image">
            <img class="images" src="${meals.recipe.image}" alt="Avatar" style="width:100%">
          </div>
        </div>

        <div class="container">
          <span class="health">Health Labels:</span>
         ${healthy.map(hLabel => `<span> ${hLabel} </span>`).join(',')}
       </div>
        <div class="ingredients">
          <h4><b>Ingredients</b></h4>
         <div class="card-ingredients">

           ${ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
         </div>
        </div>
        <div class="recipe-card__nav">

        <a href="#" id="modal-btn" class="btn btn-primary">Nutrition Info</a>
        <a href="${meals.recipe.url}" target="_blank" class="btn btn-primary getRecipe">Click for full recipe</a>
       </div>
   </div>
      </div>
    ` )

      // the code below if sending the meals.recipe as a paramteter to anotherfunction this is the way to do it
      //which should be written in line 112
        // <a href="#" class="btn btn-primary modal-btn" id="${meals.recipe}">Nutrition Info</a>
      //MODAL POPUPS
             // Get DOM Elements

             const modalBody = document.querySelector(".modal-body");
             const modal = document.querySelector("#my-modal");
             const modalBtn = document.querySelector("#modal-btn");
             const closeBtn = document.querySelector(".close");

             // Events
             modalBtn.addEventListener("click", openModal);
             closeBtn.addEventListener("click", closeModal);
             window.addEventListener("click", outsideClick);
             
             
             // Open
             function openModal() {
               modal.style.display = "block";
               displayNutrients(meals.recipe,meals.recipe.totalDaily, meals.recipe.totalNutrients);
             }

             // Close
             function closeModal() {
               modal.style.display = "none";
             }

             // Close If Outside Click
             function outsideClick(e) {
               if (e.target == modal) {
                 modal.style.display = "none";
               }
             }

       // document.getElementById(meals.recipe).addEventListener('click', function() {
      // displayNutrition(meals.recipe)


    // // use this to call the nutrition-data api
     //     <a href="#" class="btn btn-primary" id="${meals.recipe.label}">Nutrition Info</a>
        // document.getElementById(meals.recipe).addEventListener('click', function() {
      //  console.log(meals.recipe) 
      //  console.log("ingr",ingredients)
      //  nutritionalLabels(meals.recipe);
  

    //  });


    }

            // if the nutrition data works then this code is to be invoked
            // async function nutritionalLabels(label) {
            //   console.log(label)
            //   console.log("ingr",label.ingredientLines);
            //   const ingrList = []
             
            //   for (let i = 0; i <= 20; i++) {
            //     if (label.ingredientLines[`${i}`]) {
            //       ingrList.push(label.ingredientLines[`${i}`])
            
            //     } else {
            //          break
            //       }
            //   }
            //   const inger=ingrList.join();
            //   console.log("inger",inger)
            //   document.querySelector('#showNutrition').innerHTML='';
            //  apps_id='3fbb56a0'
            //  apps_key='7c1f1da42c85743aabd55887e22ca4aa	'
            //  nutri_type='cooking'
            //  const urls=`https://api.edamam.com/api/nutrition-data/?app_id=${apps_id}&app_key=${apps_key}
            //     &nutrition-type=${nutri_type}&ingr=${inger}`
            //  try{
            //   // const nutritionItem=await fetch("https://api.edamam.com/api/nutrition-data/?",
            //   // {
            //   //   method: "GET",
            //   //   cors:"no-cors",
            //   //   headers: {
            //   //      "Accept": 'application/json',
            //   //      "Content-Type": "application/json",
            //   //      "app_id":"724c75a7",
            //   //      "app_key":"8936f86dc68cd1d04611e9441a8a4f00",
            //   //    },
            //   //   body:JSON.stringify({  "title":`${label}`,
            //   //     "ingr":[`${ingrList}`],
            //   // }),
            
            //   // });
            //           const nutritionItem = await fetch(urls)
            //          console.log(nutritionItem);
            //          const nutritionItemData = await nutritionItem.json()
            //          console.log(nutritionItemData);
            //    }catch(err){
            //      console.log('err2',err);
            //    };
            //  }


            // function displayNutrition(nutrientInfo){
             
            //      if this function is called then I would display the table inside the function
            // }


             const displayNutrients = (nutrientInfo,daily, nutrient) => {
               


               const fat = nutrient.FAT ? `${nutrient.FAT.quantity.toFixed(0)}g` : ''
               const calFat=nutrient.FAT ? `${(9*nutrient.FAT.quantity).toFixed(0)}g` : ''
               const dailyFat=daily.FAT? `${daily.FAT.quantity.toFixed(0)}%`: ''
               const fasat=nutrient.FASAT ? `${nutrient.FASAT.quantity.toFixed(0)}g`:''
               const dailyFasat=daily.FASAT ? `${daily.FASAT.quantity.toFixed(0)}%`:''
               const fatRn=nutrient.FATRN ? `${nutrient.FATRN.quantity.toFixed(0)}g`:''
               const chole= nutrient.CHOLE ? `${nutrient.CHOLE.quantity.toFixed(0)}g`:''
               const dailyChole= daily.CHOLE ? `${daily.CHOLE.quantity.toFixed(0)}%`:''
               const na= nutrient.NA ? `${nutrient.NA.quantity.toFixed(0)}g`:''
               const dailyNa = daily.NA ? `${daily.NA.quantity.toFixed(0)}%`:''
               const chocDf = nutrient.CHOCDF ? `${nutrient.CHOCDF.quantity.toFixed(0)}g`:''
               const dailyChocDf = daily.CHOCDF ? `${daily.CHOCDF.quantity.toFixed(0)}%`:''
               const fibTg= nutrient.FIBTG ? `${nutrient.FIBTG.quantity.toFixed(0)}g`:''
               const dailyFibTg= daily.FIBTG ? `${daily.FIBTG.quantity.toFixed(0)}%`:''
               const sugar= nutrient.SUGAR ? `${nutrient.SUGAR.quantity.toFixed(0)}g`:''
               const procnt= nutrient.PROCNT ? `${nutrient.PROCNT.quantity.toFixed(0)}g`:''
               const dailyfoldFe= daily.FOLDFE ? `${daily.FOLDFE.quantity.toFixed(0)}%`:''
               const dailyvitd= daily.VITD ? `${daily.VITD.quantity.toFixed(0)}%`:''
               const dailyvitc= daily.VITC ? `${daily.VITC.quantity.toFixed(0)}%`:''
               const dailyvitarae= daily.VITA_RAE ? `${daily.VITA_RAE.quantity.toFixed(0)}%`:''
               const dailyvitb6a= daily.VITB6A ? `${daily.VITB6A.quantity.toFixed(0)}%`:''
               const dailyCa= daily.CA ? `${daily.CA.quantity.toFixed(0)}%`:''
               const dailyFe= daily.FE ? `${daily.FE.quantity.toFixed(0)}%`:''
               const dailyk= daily.K ? `${daily.K.quantity.toFixed(0)}%`:''

                document.querySelector('#modal-body').innerHTML=`
              <div id="nutritionfacts">
                 <table width="242" cellspacing="0" cellpadding="0">
                 <tbody>
                   <tr>
                     <td align="center" class="header">Nutrition Facts</td>
                   </tr>
                   <tr>
                     <td>
                       <div class="serving">Per <span class="highlighted">${(nutrientInfo.totalWeight/nutrientInfo.yield).toFixed(0)}</span> Serving Size</div>
                     </td>
                   </tr>
                   <tr style="height: 7px">
                     <td bgcolor="#000000"></td>
                   </tr>
                   <tr>
                     <td style="font-size: 7pt">
                       <div class="line">Amount Per Serving</div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="label">Calories 
                           <div class="weight">${(nutrientInfo.calories/nutrientInfo.yield).toFixed(0)}</div>
                         </div>
                         <div style="padding-top: 1px; float: right;" class="labellight">Calories from Fat 
                              <div class="weights">${calFat}</div>
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="dvlabel">% Daily Value<sup>*</sup></div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="label">Total Fat <div class="weight">${fat}</div>
                         </div>
                         <div class="dv">${dailyFat}
                          </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td class="indent">
                       <div class="line">
                         <div class="labellight">Saturated Fat <div class="weight">${fasat}</div>
                         </div>
                         <div class="dv">${dailyFasat}</div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td class="indent">
                       <div class="line">
                         <div class="labellight"><i>Trans</i> Fat <div class="weight">${fatRn}</div>
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="label">Cholesterol <div class="weight">${chole}</div>
                         </div>
                         <div class="dv">${dailyChole}</div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="label">Sodium <div class="weight">${na}</div>
                         </div>
                         <div class="dv">${dailyNa}</div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="label">Total Carbohydrates <div class="weight">${chocDf}</div>
                         </div>
                         <div class="dv">${dailyChocDf}</div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td class="indent">
                       <div class="line">
                         <div class="labellight">Dietary Fiber <div class="weight">${fibTg}</div>
                         </div>
                         <div class="dv">${dailyFibTg}</div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td class="indent">
                       <div class="line">
                         <div class="labellight">Sugars <div class="weight">${sugar}</div>
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="label">Protein <div class="weight">${procnt}</div>
                         </div>
                       </div>
                     </td>
                   </tr>
                   <tr style="height: 7px">
                     <td bgcolor="#000000"></td>
                   </tr>
                   <tr>
                     <td>
                       <table cellspacing="0" cellpadding="0" border="0" class="vitamins">
                         <tbody>
                           <tr>
                             <td>Vitamin A &nbsp;&nbsp; ${dailyvitarae}</td>
                             <td align="center"></td>
                             <td align="right">Calcium &nbsp;&nbsp;${dailyCa} </td>
                           </tr>
                           <tr>
                             <td>Vitamin B &nbsp;&nbsp; ${dailyvitb6a}</td>
                             <td align="center"></td>
                             <td align="right">Iron &nbsp;&nbsp; ${dailyFe}</td>
                           </tr>
                           <tr>
                             <td>Vitamin C &nbsp;&nbsp; ${dailyvitc}</td>
                             <td align="center"></td>
                             <td align="right">Potassium &nbsp;&nbsp; ${dailyk}</td>
                           </tr>
                           <tr>
                             <td>Vitamin D &nbsp;&nbsp; ${dailyvitd}</td>
                             <td align="center"></td>
                             <td align="right">Folate &nbsp;&nbsp; ${dailyfoldFe}</td>
                           </tr>
                         </tbody>
                       </table>
                     </td>
                   </tr>
                   <tr>
                     <td>
                       <div class="line">
                         <div class="labellight">* Based on a regular <a href="#">2000 calorie diet</a>
                           <br><br><i>Nutritional details are an estimate and should only be used as a guide for approximation.</i>
                         </div>
                       </div>
                     </td>
                   </tr>
                 </tbody>
               </table>
             </div>

              `
            }
