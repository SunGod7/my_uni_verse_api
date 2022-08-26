// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')
// const fetch = require("node-fetch")
// pull in Mongoose model for examples
const fetch = require('node-fetch')
const Lyric = require('../models/lyric')
// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
 const router = express.Router()
// let api = "https://api.lyrics.ovh/v1/?q="



// INDEX
router.get('/lyrics', (req, res, next) => {
	Lyric.find()
		.then((lyrics) => {
			// `lyrics` will be an array of Mongoose documents
			// we want to convert each one to a POJO, so we use `.map` to
			// apply `.toObject` to each one
			return lyrics.map((lyric) => lyric.toObject())
		})
		// respond with status 200 and JSON of the lyrics
		.then((lyrics) => res.status(200).json({ lyrics: lyrics }))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// SHOW
router.get('/lyrics/:id',  (req, res, next) => {

	Lyric.findById(req.params.id)
		.then(handle404)
		.then((lyric) => res.status(200).json({ lyric: lyric.toObject() }))
		.catch(next)
})

// CREATE
router.post('/lyrics', requireToken, (req, res, next) => {

	req.body.lyric.owner = req.user.id
	Lyric.create(req.body.lyric)
		.then((lyric) => {
			res.status(201).json({ lyric: lyric.toObject() })
		})
		.catch(next)
})

// UPDATE
router.patch('/lyrics/:id', requireToken, removeBlanks, (req, res, next) => {
	// if the client attempts to change the `owner` property by including a new owner, prevent that by deleting that key/value pair
	delete req.body.lyric.owner

	Lyric.findById(req.params.id)
		.then(handle404)
		.then((lyric) => {
			// pass the `req` object and the Mongoose record to `requireOwnership`
			// it will throw an error if the current user isn't the owner
			requireOwnership(req, lyric)

			// pass the result of Mongoose's `.update` to the next `.then`
			return lyric.updateOne(req.body.lyric)
		})
		// if that succeeded, return 204 and no JSON
		.then(() => res.sendStatus(204))
		// if an error occurs, pass it to the handler
		.catch(next)
})

// DELETE
router.delete('/lyrics/:id', requireToken, (req, res, next) => {
	Lyric.findById(req.params.id)
		.then(handle404)
		.then((lyric) => {
			requireOwnership(req, lyric)
			lyric.deleteOne()
		})
		.then(() => res.sendStatus(204))
		.catch(next)
})
module.exports = router
