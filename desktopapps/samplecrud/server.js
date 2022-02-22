const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
const Task = require('./models/task');
require('dotenv').config();
// constexphbs = require('express-handlebars')
const PORT = process.env.PORT || 3000;
// const PORT = 3000;
// const db = require('./config/mongoose');
// importng the Schema For tasks
// app.engine('handlebars', exphbs({
//     defaultLayout: 'main'
// }));
app.set('view engine', 'handlebars');
//connection to db
// mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to db!");
        app.listen(PORT, () => {
            console.log("Server Up and running");
        });
    })
    .catch(err => console.log(err));


//middleware that helps use to request, get response and 
//transfer the control to the next middleware to perform tasks

app.set('view engine', "ejs");
// app.set('views', './views');
// app.use("/static", express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));




// With middleware

//INDEX PAGE
app.use('/', function(req, res) {
            Task.find({}, function(err, task) {
                if (err) {
                    console.log('Error in fetching tasks from db');
                    return;
                }
                res.json({ title: "TASKAPP-ToDoList" });
                response.status(200).json(todos);
                response.render('pages/index');

            })



            // const MongoClient = require('mongodb').MongoClient;
            // use res.render to load up an ejs view file
            // MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true })
            //     .then(client => {
            //         console.log(`Connected to ${dbName} Database`)
            //         db = client.db(dbName)
            //     })
            // app.get('/', function(request, response) {
            //     response.status(200).json(todos);
            //     response.render('pages/index');
            // })
            app.get('/', (request, response) => {
                const title = 'WELCOME TO THE TODOLIST APP';
                response.render('index', {
                    title: title
                });
            });



            // about page
            app.get('/about', function(request, response) {
                response.render('pages/about');
            });


            //lists page
            // app.get('/lists', listRoutes);
            // // (request, response) => {
            // })
            app.get('tasks', tasks.list) app.get('/tasks', tasks.markAllCompleted) app.post('/tasks', tasks.add);
            app.post('/tasks/:task_id', tasks.markCompleted);
            app.delete('/tasks/:task_id', tasks.del);
            app.get('/tasks/completed', tasks.completed);
            // tasks page
            // app.post('/tasks', function(req, res) {
            //     res.render('pages/tasks');
            // });

            let dropdownVals = ['Completed', 'All Completed', 'Mark Completed']
            app.post('/tasks', (request, response) => {
                db.collection('chores').insertOne(request.body)
                    .then(result => {
                        console.log('Rapper Added')
                        response.render('pages/tasks');
                        response.redirect('/pages/tasks');
                    })
                    .catch(error => console.error(error))
            })

            //listening to the port
            app.listen(PORT, () => {
                console.log(`Listening on ${PORT}`);
            });