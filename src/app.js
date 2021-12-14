const express = require('express');
const bodyParser = require('body-parser');

const course = require('./routes/course');
const subject = require('./routes/subject');
const question = require('./routes/question');

const cors = require('cors');

require('dotenv').config();
require('./config/database');

const app = express();

app.use(cors());
app.use( bodyParser.json());

app.use('/courses', course);
app.use('/subjects', subject);
app.use('/questions', question);

app.listen(process.env.PORT || 3000, () => console.log(`Server running`));