// res.send('lists')

// res.render('pages/lists', {
//             tasks: tasks,
//             tagline: tagline

// });



// // Add Idea Form
// app.get('/add', (req, res) => {
//     res.render('tasks/add');
// });

// //add Tasks form
// app.get('/tasks/add', (req, res) => {
//     Task.find({})
//         .sort({ deadline: 'desc' })
//         .then(tasks => {
//             console.log('Task was saved!')
//             res.render('tasks/add', {
//                 tasks: tasks
//             });
//         });
// });


// //Process Form for add
// app.post('/tasks', (req, res) => {

//     let errors = [];

//     if (!req.body.name) {
//         errors.push({
//             text: 'Please add a task todo'
//         });
//     }
//     if (!req.body.category) {
//         errors.push({
//             text: 'Please select a category'
//         });
//     }
//     if (!req.body.description) {
//         errors.push({
//             text: 'Please add a description to the task'
//         });
//     }
//     if (!req.body.deadline) {
//         errors.push({
//             text: 'Please select a deadline date'
//         });
//     }

//     if (errors.length > 0) {
//         res.render('tasks/add', {
//             errors: errors,
//             name: req.body.name,
//             description: req.body.description,
//             category: req.body.category,
//             deadline: req.body.deadline
//         });
//     } else {

//         const newUser = {
//             name: req.body.name,
//             description: req.body.description,
//             category: req.body.category,
//             deadline: req.body.deadline,
//             completed: false
//         };
//         new Task(newUser)
//             .save()
//             .then(task => {

//                 console.log('Task was saved!');
//                 // res.send("item saved to database");
//                 req.flash('success_msg', 'Task added');
//                 res.redirect('/tasks');


//             })

//         .catch(err => console.log(err));
//     }
// });



// //Edit Tasks form
// app.get('/tasks/:id', (req, res) => {
//     Task.findOne({
//             _id: req.params.id
//         })
//         .then(task => {
//             res.render('tasks/update', {
//                 task: task
//             });
//         });
// });




// //Process the edit

// app.put('/:id', (req, res) => {
//     // res.send('PUT')
//     Task.findOne({
//             _id: req.params.id
//         })
//         .then(task => {

//             task.name = req.body.name;
//             task.category = req.body.category;
//             task.description = req.body.description;
//             task.deadline = req.body.deadline;
//             task.save()
//                 .then(task => {
//                     req.flash('success_msg', 'Tasks updated');
//                     res.redirect('/tasks');


//                 })
//         })
// })


// //Delete Task
// app.delete('tasks/:id', (req, res) => {
//     // res.send('Delete')
//     Task.remove({ _id: req.params.id })
//         .then(() => {
//             req.flash('success_msg', 'Task removed')
//             res.redirect('/tasks')

//         });
// });
// Task.removeByID(id, function(err, count) {
//     if (error) return next(error);
//     if (count !== 1) return next(new Error('Something went wrong.'));
//     console.info('Deleted task %s with id=%s completed.', req.task.name, req.task._id);
//     res.status(204).send();
// })
// const id = req.params.id;
// Task.findByIdAndDelete(id)
//     .then(() => {
//         res.json({ redirect: '/tasks' });
//     })
//     .catch(err => console.log(err))