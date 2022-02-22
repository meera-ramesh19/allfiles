const deleteBtn = document.querySelectorAll('.del')
Array.from(deleteBtn).forEach((el) => {
    e1.addEventListener('click', deleteTodo)
})

async function deleteTodo() {
    const todoText = this.parentNode.childNodes[1].innerText(text)
    try {
        const response = await fetch('deleteTodo', {
            method: 'delete',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                'todostext': todoText
                    //(todostext will be equal to whatever the text was
                    // nextto the thing that HTMLDataElement the word delete button in dom)
                    //todoText will have the value of firsttry
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }.catch(err) { console.log(err) }
}