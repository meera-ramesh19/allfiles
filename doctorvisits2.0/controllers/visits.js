const Visit = require('../models/Visit')
const User = require('../models/User')
const cloudinary = require('../middleware/cloudinary');
module.exports = {
        getProfile: async(req, res) => {
            try {
                const posts = await Visit.find({ user: req.user.id });
                res.render("profile.ejs", { posts: posts, user: req.user });
            } catch (err) {
                console.log(err);
            }
        },
        getAllVisits: async(req, res) => {
            try {
                //Find function without any argument will return all
                //the records from the 'Person' collection.
                const AllVisits = await Visit.find()
                res.render('index.ejs', { visits: AllVisits, user: req.user, leaflet: false })
            } catch (err) {
                console.error(err)
            }
        },
        getVisits: async(req, res) => { //filtering records
            try {
                const IndividualVisits = await Visit.find({ user: req.user._id })
                res.render('profile.ejs', { visit: IndividualVisits, user: req.user, leaflet: true })
            } catch (err) {
                console.error(err)
            }
        },
        getVisitById: async(req, res) => {
            const { id } = req.params
                // const { id } = req.body
            try {
                const visit = await Visit.findById(id).populate('user')
                res.render('visit.ejs', { visit: visit, user: req.user, leaflet: true })
            } catch (e) {
                console.error(e)
            }

        },
        putVisit: async(req, res) => {
            try {
                // get the person that we want to update data
                // fill the form with that data
                // use the data from form to update that person
                // redirect to /persons/:id
                const visit = await Visit.findOneAndUpdate({ _id: req.params.id }, req.body)
                res.redirect(`/visit/${visit._id}`)
            } catch (err) {
                console.error(err)
            }
        },
        getFeed: async(req, res) => {
            try {
                const posts = await Post.find().sort({ createdAt: "desc" }).lean();
                res.render("feed.ejs", { posts: posts });
            } catch (err) {
                console.log(err);
            }
        },
        getVisit: async(req, res) => {
            try {
                const visit = await Visit.findById(req.params.id);
                res.render("visit.ejs", { visit: visit, user: req.user });
            } catch (err) {
                console.log(err);
            }
        },
        createVisit: async(req, res) => {
            try {
                // Upload image to cloudinary
                const result = await cloudinary.uploader.upload(req.file.path);

                await Visit.create({
                    title: req.body.title,
                    image: result.secure_url,
                    cloudinaryId: result.public_id,
                    caption: req.body.caption,
                    likes: 0,
                    user: req.user.id,
                });
                console.log("Visit has been added!");
                res.redirect("/profile");
            } catch (err) {
                console.log(err);
            }
        },
        likeVisit: async(req, res) => {
            try {
                await Visit.findOneAndUpdate({ _id: req.params.id }, {
                    $inc: { likes: 1 },
                });
                console.log("Likes +1");
                res.redirect(`/visit/${req.params.id}`);
            } catch (err) {
                console.log(err);
            }
        },

        reviewVisit: async(req, res) => {
            try {
                await Visit.findById(req.params.id).populate("visit").exec(function(err, user) {

                    if (err) {
                        console.log(err);
                    } else {
                        res.render("/visit", { visit: visit });
                    }
                });
                //     findOneAndUpdate({ _id: req.params.id }, {
                //         $inc: { likes: 1 },
                //     });
                //     console.log("Reviews");
                //     res.redirect(`/visit/${req.params.id}`);
                // } catch (err) {
                //     console.log(err);
                // }
            },

            deleteVisit: async(req, res) => {
                try {
                    // Find post by id
                    let visit = await Visit.findById({ _id: req.params.id });
                    // Delete image from cloudinary
                    await cloudinary.uploader.destroy(visit.cloudinaryId);
                    // Delete post from db
                    await Visit.remove({ _id: req.params.id });
                    console.log("Deleted Visit");
                    res.redirect("/profile");
                } catch (err) {
                    res.redirect("/profile");
                }
            },
        };