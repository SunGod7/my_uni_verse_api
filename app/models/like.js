const mongoose = require('mongoose')

const likeSchema = new mongoose.Schema(
    {
        owner:{
            type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
        },
        lyric: {
            type: mongoose.Schema.Types.ObjectId,
			ref: 'Lyric',
			required: true,
        }
    },
    {
		timestamps: true,
	}
)

module.exports = likeSchema
