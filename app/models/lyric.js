const mongoose = require('mongoose')
const commentSchema = require('./comment')
const likeSchema = require('./like')


// const lyricSchema = new mongoose.Schema(

//     {
//         artist: {
//             type: String,
//             required: true
//         },
//         title: {
//             type: String,
//             required: true
//         },
//         img: {
//             type: String,
//             required: true
//         },


//         lyrics: {
//             type: String,
//             required: true
//         },
//         comments: [commentSchema],
//         // reasonTagged: String,

//         owner: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'User',
//             // required: true,
//         }

//     },
//     {
//         timestamps: true,
//     }
//  )



const lyricSchema = new mongoose.Schema(
    {
        artist: {
            type: Array,
            required: true
        },
        title: {
            type: Array,
            required: true
        },

        lyrics: String,
        comments:[commentSchema],
        reasonTagged: String,

        owner:{
            type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
        }

    },
    {
		timestamps: true,
	}
 )
module.exports = mongoose.model('Lyric', lyricSchema)