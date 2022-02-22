const elf = document.getElementById("elf")
const btn = document.getElementById("btn")

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.



solution:





const elf = document.getElementById("elf")
const btn = document.getElementById("btn")
const containerElf = document.getElementById("container-elf");
const title = document.getElementById("title");
let counterElf = 0;

btn.addEventListener("click", duplicateElf)

function duplicateElf(){
    // Task:
   // - Write a function to duplicate the elf when the button is clicked.
   // - See index.css for optional styling challenges.   
   
if(counterElf < 100){   
    counterElf++;
        // console.log(counterElf);
    const divElf = document.createElement("div");
        divElf.classList.add("square-elf");
        divElf.innerText = "🧝";
        containerElf.appendChild(divElf);
    title.innerText = `${counterElf} Elves on the wall`;    
    } else {
        console.log(`100 elves!`);
        title.innerText = `${counterElf} Elves on the wall!`; 
    }
}

// Stretch goals:
// - Write a function to give the elves some tools, or a cup of tea!
// - Limit the total number of elves to 100.
