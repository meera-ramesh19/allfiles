// to get express
const express = require('express')
    //WE can use app to extract and  use it
const app = express()
const PORT = 8000

let savage = {

    'age': 25,
    'birthname': 'Sheyaa bin Abraham-Joseph',
    'birthlocation': 'london, England'
}

//app.get takes 2 values

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')

})
app.get('api/savage', (request, response) => {
    response.json(savage)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)


})