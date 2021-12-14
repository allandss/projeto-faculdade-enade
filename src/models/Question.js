const mongoose = require('mongoose')

const questionSchema = mongoose.Schema({
    number: {
        type: String,
        required: true,
        trim: true
    },
    year: {
		type: String,
		required: true,
		trim: true
    },
    course: {
        type: Array,
        required: true
    },
    subject: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true 
    },
    answer: {
        type: String,
        required: true 
    }    
});

const Question = mongoose.model('Question', questionSchema)

module.exports = Question