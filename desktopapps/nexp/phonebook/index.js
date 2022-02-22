const http = require('http')

const express = require('express')
const app = express()

app.use(express.json())

let persons = [{
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-34-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

// You can do it like this:
//from reddit
//     let app = require("express")();
// let server = require("http").createServer(app);
// server.listen(3000);

// app.get('/', (req, res) => { console.log(req.params);
//     res.sendStatus(200); });

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'application/json' })
//     response.end(JSON.stringify(notes))


// })

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/info', (request, response) => {
    const id = Number(request.params.id)
    console.log(id)
    const date_obj = new Date()
    response.send(`<h3>Phonebook has info for ${persons.length} people</h3><h3> ${date_obj}</h3> `)

})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

const generateId = () => {
    let min = 5
    let max = 200
    let random = Math.floor(Math.random() * (max - min + 1));
    console.log(random)
    return random
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.content) {
        return response.status(400).json({
            error: 'content missing'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }

    persons = persons.concat(person)

    response.json(person)
})


app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})


app.delete('/api/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)

    response.status(204).end()
})


const PORT = 3003
app.listen(PORT, () => {
    console.log(`
            Server running on port $ { PORT }
            `)
})