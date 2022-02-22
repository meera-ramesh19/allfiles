const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(cors())

let rappers = {
    '21 savage': {
        'age ': 28,
        'birthName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 27,
        'birthName': 'Chancellor Jonathon Rapper',
        'birthLocation': 'Chicago, Illinois'

    },
    ' eminem': {
        'age': 48,
        'birthName': 'Marshall Bruce Mathers',
        'birthLocation': 'Detroit, Michigan'

    },
    'dr.dre': {
        'age': 56,
        'birthName': 'Andre Romero Young',
        'birthLocation': 'Compton, California'
    },
    'drake': {
        'age': 31,
        'birthName': 'Aubrey Drake Graham',
        'birthLocation': 'Toronto, Ontario'

    },
    'dylan': {
        'age': 'unknown',
        'birthName': 'unknown',
        'birthLocation': 'unknown'

    }

}

app.get('/', (request, response) => {
    console.log('Working')
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/rappers', (request, response) => {
    console.log(rappers)
    response.json(rappers)
})

app.get('/api/rappers/:rapperName', (request, response) => {
    const rapName = request.params.rapperName.toLowerCase()
    console.log(rapName)
    console.log(rappers[rapName])
    if (rappers[rapName]) {
        response.json(rappers[rapName])
    } else {
        response.json(rappers['dylan'])
    }

})


app.listen(process.env.PORT || PORT, () => {
    console.log(` server running on port ${ PORT } `)
})
