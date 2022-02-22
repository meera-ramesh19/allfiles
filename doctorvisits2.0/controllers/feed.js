const Feed = require('../models/Patient')
const moment = require('moment')
module.exports = {
    getFeed: async(req, res) => {
        try {
            // console.log(req.user)
            const patients = await Feed.find()
                .sort({ createdAt: 'desc' })
                .lean()
                // console.log(patients)
            res.render('feed.ejs', { patients: patients, moment: moment, user: req.user })
        } catch (err) {
            console.log(err)
        }
    },
    likePost: async(req, res) => {
        const post = await Feed.findById(req.params.id)
            // console.log(post)
        if (post.likes.includes(req.user.id)) {
            try {
                await Feed.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { likes: req.user.id },
                }, {
                    new: true,
                })
                console.log("Likes -1");
                res.redirect(`/feed`);

            } catch (err) {
                console.log(err);
            }
        } else if (post.dislikes.includes(req.user.id)) {
            try {
                await Feed.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { dislikes: req.user.id },
                    $push: { likes: req.user.id },
                }, {
                    new: true,
                })
                console.log("Likes -1");
                res.redirect(`/feed`);

            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await Feed.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { likes: req.user.id },
                }, {
                    new: true,
                })
                console.log("Likes +1");
                res.redirect(`/feed`);

            } catch (err) {
                console.log(err);
            }
        }
    },
    dislikePost: async(req, res) => {
        const post = await Feed.findById(req.params.id)
        if (post.dislikes.includes(req.user.id)) {
            try {
                await Feed.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { dislikes: req.user.id },
                }, {
                    new: true,
                })
                console.log("dislikes -1");
                res.redirect(`/feed`);

            } catch (err) {
                console.log(err);
            }
        } else if (post.likes.includes(req.user.id)) {
            try {
                await Feed.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { likes: req.user.id },
                    $push: { dislikes: req.user.id }
                }, {
                    new: true,
                })
                console.log("dislikes -1");
                res.redirect(`/feed`);

            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await Feed.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { dislikes: req.user.id },
                }, {
                    new: true,
                })
                console.log("dislikes +1");
                res.redirect(`/feed`);

            } catch (err) {
                console.log(err);
            }
        }
    }
}