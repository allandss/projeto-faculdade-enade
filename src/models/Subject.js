const mongoose = require('mongoose')

const subjectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    }
});

const Subject = mongoose.model('Subject', subjectSchema)

module.exports = Subject