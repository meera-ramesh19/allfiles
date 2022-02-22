const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient
const PORT = 3000

let db,
    dbConnectionStr = "mongodb+srv://crudexample:crudexample@rapcluster.dcmgy.mongodb.net/rap?retryWrites=true&w=majority",
    dbName = "rap"

MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    })

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
