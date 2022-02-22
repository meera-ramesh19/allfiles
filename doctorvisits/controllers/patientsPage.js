const Patient = require('../models/Patient');
const User = require('../models/User');
const moment = require('moment')
const cloudinary = require('../middleware/cloudinary')
module.exports = {
    getPatientsPage: async(req, res) => {
        try {
            const patient = await Patient.findById(req.params.id)
            const userN = await User.findById(patient.userId)
                // console.log(userN)
            res.render('patientsPage.ejs', { patients: patient, moment: moment, user: req.user, creator: userN })
        } catch (err) { console.log(err) }
    },

    comment: async(req, res) => {
        try {
            // console.log(req.user, req.body.commentBody)
            await Patient.findOneAndUpdate({ _id: req.params.id }, {
                $push: { patcomments: req.user.userName + ': ' + req.body.commentBody },
            }, {
                new: true,
            })
            console.log("Comment Added");
            res.redirect(`/patientPage/${req.params.id}`);

        } catch (err) {
            console.log(err);
        }
    },
    likePost: async(req, res) => {
        const post = await Post.findById(req.params.id)
        if (post.likes.includes(req.user.id)) {
            try {
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { likes: req.user.id },
                }, {
                    new: true,
                })
                console.log("Likes -1");
                res.redirect(`/patientPage/${req.params.id}`);

            } catch (err) {
                console.log(err);
            }
        } else if (post.dislikes.includes(req.user.id)) {
            try {
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { dislikes: req.user.id },
                    $push: { likes: req.user.id },
                }, {
                    new: true,
                })
                console.log("Likes -1");
                res.redirect(`/patientPage/${req.params.id}`);

            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { likes: req.user.id },
                }, {
                    new: true,
                })
                console.log("Likes +1");
                res.redirect(`/patientPage/${req.params.id}`);

            } catch (err) {
                console.log(err);
            }
        }
    },
    dislikePost: async(req, res) => {
        const post = await Post.findById(req.params.id)
        if (post.dislikes.includes(req.user.id)) {
            try {
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { dislikes: req.user.id },
                }, {
                    new: true,
                })
                console.log("dislikes -1");
                res.redirect(`/patientPage/${req.params.id}`);

            } catch (err) {
                console.log(err);
            }
        } else if (post.likes.includes(req.user.id)) {
            try {
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $pull: { likes: req.user.id },
                    $push: { dislikes: req.user.id }
                }, {
                    new: true,
                })
                console.log("dislikes -1");
                res.redirect(`/patientPage/${req.params.id}`);

            } catch (err) {
                console.log(err);
            }
        } else {
            try {
                await Post.findOneAndUpdate({ _id: req.params.id }, {
                    $push: { dislikes: req.user.id },
                }, {
                    new: true,
                })
                console.log("dislikes +1");
                res.redirect(`/patientPage/${req.params.id}`);

            } catch (err) {
                console.log(err);
            }
        }
    },
}