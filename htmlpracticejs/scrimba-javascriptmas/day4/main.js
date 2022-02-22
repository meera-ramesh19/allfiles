const items = ["Candles", "Decorations", "Chocolate"]
const checklist = document.getElementById("checklist")
const addlist=document.getElementById("addlist");

// - For each item in the items array, create a div with a class of "checklist-item", which contains a checkbox input and corresponding label.
// - Make sure that the shopping list can render a checkbox for all the items, even if new items are added to the items array.
function checkListArray(){

// for (let i=0; i<items.length; i++) {
//     checklist.innerHTML += `
//          <div class="checklist-item">
//                <input type="checkbox" id="${items[i]}" value="${items[i]}" name="shopping" class="checkbox">
//                 <label for="${items[i]}" class="strikethrough">${items[i]}</label>
//                  <button type="button" class="deleteBtn" value="${items[i]}"><i class="far fa-trash-alt"></i></button>
//                 <br>
                
//                 </div>
//     `
//    }
// }

addlist.innerHTML +=`
       <div class="addlist-item">
            <input type="text" name="shopping" id="array-items">
            <button type="button" id="submit" >Add Items</button>
        </div>
`

checkListArray();
// Task:




// Stretch goals:
// - Add an input which allows the user to add more items.
// - Add a delete button for the items.

let addBtn=document.getElementById('addBtn');
// console.log(addBtn)
let input = document.getElementById('array-items');

// console.log(deleteBtn)
addBtn.addEventListener('click', () =>{
    console.log("add")
    items.push(input.value);
    input.value='';
    checklist.innerHTML=''
    checkListArray();
})

let deleteBtns = document.querySelectorAll('deleteBtn');
let checkboxes=document.querySelectorAll('checkboxes');
// let delValue = document.getElementById("deleteBtn").value;
console.log(deleteBtns);

deleteBtns.addEventListener('click' , function(e) {
   
    // if (e.target.classList.contains('deleteBtn')) {console.log("delete");}
    // for (let checkbox of checkboxes){
    //     console.log()
    //     if (this.checked == true){
    //           items=items.filter(e=>e ==this.value)
    //        addlist.innerHTML=`<span> You checked </span>`+ items.join();
    //     }
    // }

    const checked = document.querySelectorAll('input[name="shopping"]:checked');
    
    for( let i = 0; i < items.length; i++){ 
                                   
        if ( items[i] === checked.value) { 
            items.splice(i, 1); 
            // i--; 
        }
    }
    checked.forEach((checkbox)=>{
        console.log(checkbox.value)
        const remove=items.filter((item) =>{ 
            return item === checkbox.value; 
        });

    })
        
    checklist.innerHTML=''
    checkListArray();
})