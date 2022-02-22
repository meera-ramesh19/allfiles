const injuryInput = document.getElementById('injury')


document.getElementById('add-injury').addEventListener('click', addText)


function addText() {
    const ul = document.getElementById('anatomy-list')
    const injuryLiList = ul.children
    const injuryTextList = [...injuryLiList].map(li=> li.id)
    console.log(injuryTextList)

    let injuryText = injuryInput.value

    if(!injuryTextList.includes(injuryText)){
        ul.insertAdjacentHTML('beforeend', `
            <li name="body-part" id="${injuryText}">
                ${injuryText}
                <button type="button" id="${injuryText}-btn">X</button>
            </li>
        `);
        document.getElementById(`${injuryText}-btn`).addEventListener('click', (event)=>{
                const deleteButton = event.target;
                const listItem = deleteButton.parentNode
                listItem.remove()
            })
    }
}

