const house = document.getElementById("house")
const decorator = document.getElementById("decorator")
const ornamentsEl=document.getElementById('ornaments')
// decorator.addEventListener("click", deckTheHalls)
ornamentsEl.addEventListener('click',deckTheHalls)
const positionEl=document.getElementById('position')
let decor=['☃️','🎄','❆','🎅','🤶','🎉','🍷','🎁','🧝‍♂️','🧝‍♀️','🦌','👼🏼']

let emojiArray=['🏡']
let sum=''
  // Task:
  // Write a function to add decorations (e.g. ☃️, 🎄, etc) next to the house when the switch is toggled. 

  function deckTheHalls() {
    
    if (decorator.checked) {
      
      house.textContent=sum
    }
    else {
      house.textContent = "🏡"
    }
    const emojisEl=document.getElementById('emojis')
    let emojiDisplay = emojisEl.options[emojisEl.selectedIndex].value;

    const leftrightEl=document.getElementById('leftright')
    let leftrightDisplay = leftrightEl.options[leftrightEl.selectedIndex].value;

    if(leftrightDisplay==='left'){
         emojiArray.unshift(emojiDisplay)
    }else if(leftrightDisplay==='right'){
      emojiArray.pop(emojiDisplay)
    }else{
      emojiArray.unshift(emojiDisplay)
      emojiArray.pop(emojiDisplay)
    }
    let insertEl=document.querySelector('.insert')
    insertEl.forEach((el, index) => {
      sum += nums[index]
    });
 
}



// Stretch goals:
// - Make sure that the house & decorations all stay on one line, even if there are a lot of decorations.
// - Allow the user to select different decorations.
