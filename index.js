const express = require('express');
const app = express();
const port = 3000;
const db = require('./sequelize/connection.js');
const {getQuestions, getAnswers, addQuestion, addAnswer, markQuestionHelpful,  markAnswerHelpful, reportQuestion, reportAnswer} = require('./db/queries.js');

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
  res.send(await getAnswers(req.params.question_id, req.params.page, req.params.count))
})

// Post a question
app.post('/qa/questions', async (req, res) => {
  let question = await addQuestion(req.body.body, req.body.name, req.body.email, req.body.product_id)
  res.send()
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