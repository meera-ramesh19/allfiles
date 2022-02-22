var reviewSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    },
    created: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Review", reviewSchema);

ar express = require("express");
var router = express.Router({ mergeParams: true });
var Post = require("../models/post");
var Comment = require("../models/comment");
var User = require("../models/user");
var Review = require("../models/review");
var middleware = require("../middleware");

router.get("/new", middleware.isLoggedIn, function(req, res) {
    // find campground by id
    console.log(req.params.id);
    User.findById(req.params.id).populate("reviews").exec(function(err, user) {
        if (err) {
            console.log(err);
        } else {
            res.render("reviews/new", { user: user });
        }
    });
});
// Review Create
router.post("/", middleware.isLoggedIn, function(req, res) {
    //lookup user using ID
    User.findById(req.params.id).populate("reviews").exec(function(err, user) {
        if (err) {
            console.log(err);
            res.redirect("/users");
        } else {
            Review.create(req.body.review, function(err, review) {
                if (err) {
                    req.flash("error", "Something went wrong :(");
                    console.log(err);
                } else {

                    add username and id to comment
                    review.author.id = req.user._id;
                    review.author.username = req.user.username;
                    //save comment
                    review.save();
                    user.reviews.push(review);
                    user.save();
                    console.log(review);
                    req.flash("success", "Successfully added review!");
                    res.redirect('/users/' + user._id);
                }
            });
        }
    });
});
module.exports = router;
<% include ../partials/header %>

<
div class = "card" >

    <
    ul class = "list-group list-group-flush" >

    <
    li class = "list-group-item heading-user" > <%=user.firstName%>
<%=user.lastName%> < /li>

<
/ul>

<
/div>



<
div class = "row" >

    <
    div class = "col-md-4" >

    <
    img class = "img-thumbnail"
src = "<%= user.avatar %>"
alt = "User Profile Picture" >

    <
    div class = "card" >

    <
    ul class = "list-group list-group-flush" >

    <
    li class = "list-group-item" > Profession: <%=user.job%> < /li>

<
li class = "list-group-item" > Experience: <%=user.experience%>
years < /li>

<
li class = "list-group-item" > Birth Date: <%=user.yearOfBirth%> < /li>

<
li class = "list-group-item" > Location: <%=user.country%>,
    <%=user.city%> < /li>

<
li class = "list-group-item" > <%=user.firstName%>
has < i class = "fas fa-clock" > < /i> 12 hours on account</li >

    <
    /ul>

<
a href = "#"
class = "btn btn-success" > Connect <%=user.firstName%> < /a>

<
/div>

<
/div>

<
div class = "col-md-8" >

    <
    div class = "card" >

    <
    ul class = "list-group list-group-flush" >

    <
    li class = "list-group-item" >

    <
    p > About <%=user.firstName%>: < /p>

<
p > <%= user.description %> < /p>

<
/li>

<
li class = "list-group-item" > Some posts of <%= user.firstName %>:

    <
    ul >

    <% posts.forEach(function(post){ %>

<
li > < a href = "/posts/<%= post._id %>" > <%= post.title %> < /a></li >

    <% }); %>

<
/ul>

<
/li>

<
/ul>

<
/div>

<
div class = "card bg-light comments" >

    <
    div class = "card-block" >

    <
    a href = "/users/<%=user._id%>/reviews/new"
class = "btn btn-inline btn-outline-secondary" > What do you think about <%=user.firstName%> < /a>

    <
    /div>



    <
    hr >

    <% user.reviews.forEach(function(review){ %>

<
p > <%= review %> < /p>

<% }); %>

<
/div>

<
/div>

<
/div>



<% include ../partials/footer %> < /div>