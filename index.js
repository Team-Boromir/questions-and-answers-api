const express = require('express');
const app = express();
const port = 3000;
const db = require('./sequelize/connection.js');
const {getQuestions, getAnswers, addQuestion, addAnswer, markQuestionHelpful,  markAnswerHelpful, reportQuestion, reportAnswer} = require('./db/queries.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

// const Questions = require('./sequelize/questions.js')

app.listen(port, () => {
  console.log(`Listening at listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Get the questions
app.get('/qa/questions', async (req, res) => {
  try {
    let product_id = req.query.product_id;
    let questions = await getQuestions(req.query.product_id, req.query.page, req.query.count)
    res.send(questions)
  } catch (err) {
    res.sendStatus(400)
  }
})

// Get the answers
app.get('/qa/questions/:question_id/answers', async (req, res) => {
  try {
    let {question_id, page, count} = req.params;
    console.log('id', question_id)
    res.send(await getAnswers(question_id, page, count))
  } catch (err) {
    res.sendStatus(400)
  }
})

// Post a question
app.post('/qa/questions', async (req, res) => {
  try {
    console.log('req.body', req.body)
    // let {body, name, email, product_id} = req.params;
    // await addQuestion(body, name, email, product_id)
    res.send('Question was created!')
  } catch (err) {
    console.log(err)
    res.sendStatus(400)
  }
})

// Post an answer
app.post('/qa/questions/:question_id/answers', (req, res) => {
  res.send('Answer was posted')
})

// Mark question helpful
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  res.send('Question marked as helpful')
})

// Report Question
app.put('/qa/questions/:question_id/report', (req, res) => {
  res.send('Question was reported')
})

// Mark answer helpful
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  res.send('Answer marked as helpful')
})

// Report answer
app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  res.send('Answer marked as helpful')
})