const express = require('express')
const passport = require('passport')

// pull in Mongoose model for lyrics
const Lyric = require('../models/lyric')

const customErrors = require('../../lib/custom_errors')
const handle404 = customErrors.handle404
const requireOwnership = customErrors.requireOwnership
const removeBlanks = require('../../lib/remove_blank_fields')
const requireToken = passport.authenticate('bearer', { session: false })
const router = express.Router()

// ROUTES 

// Get all comments
router.get('/comments/:lyricId', (req, res, next) => {

    // get id of lyric from parameters
    const lyricId = req.params.lyricId

	Lyric.findById(lyricId)
		.then((lyric) => {
			// `lyric.comments` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return lyric.comments.map((comment) => comment.toObject())
		})
		// respond with status 200 and JSON of the lyrics
		.then((comments) => res.status(200).json({ comments: comments }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// Create 
// POST /comments/<lyric_id>
router.post('/comments/:lyricId', (req, res, next) => {
    // get comment from req.body
    const comment = req.body.note
    // get lyric's id from req.params.lyricId
    const lyricId = req.params.lyricId
    // find the lyric
    Lyric.findById(lyricId)
        .then(handle404)
        .then(lyric => {
            // console.log('this is the lyric BEFORE commenting: ', lyric)
            // console.log('this is the comment: ', comment)

            // push the comment into the lyric's comments array
            lyric.comments.push(req.body)

            // console.log('this is the lyric AFTER commenting: ', lyric)

            return lyric.save()

        })
        // send the newly updated lyric as json
        .then(lyric => res.status(201).json({ lyric: lyric }))
        .catch(next)
})

// UPDATE 
// PATCH /comments/<lyric_id>/<comment_id>
router.patch('/comments/:lyricId/:commentId', requireToken, removeBlanks, (req, res, next) => {

    const lyricId = req.params.lyricId
    const commentId = req.params.commentId

    // console.log('Heres the new note: ', req.body.note)

    // find our lyric
    Lyric.findById(lyricId)
        .then(handle404)
        .then(lyric => {
            // single out the comment 
            const theComment = lyric.comments.id(commentId)
            // make sure the user sending the request is the owner
            // requireOwnership(req, lyric)
            // update the comment with a subdocument method
            theComment.set(req.body)
            // return the saved lyric
            // console.log('Heres the lyric AFTER updating note: ', lyric)
            return lyric.save()

            
            
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

// DELETE 
// DELETE /comments/<lyric_id>/<comment_id>
router.delete('/comments/:lyricId/:commentId', requireToken, (req, res, next) => {
    // get the comment and the lyric ids saved to variables
    const lyricId = req.params.lyricId
    const commentId = req.params.commentId
    // find the lyric
    Lyric.findById(lyricId)

        .then(handle404)

        .then(lyric => {

            const theComment = lyric.comments.id(commentId)
            // user deleting this comment is the lyric's owner
            // requireOwnership(req, lyric)
            // call remove on the subdoc
            theComment.remove()
            // return the saved lyric
            return lyric.save()
        })

        .then(() => res.sendStatus(204))

        .catch(next)
})


module.exports = router