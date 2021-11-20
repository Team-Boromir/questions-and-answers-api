const express = require('express');
const app = express();
const port = 3000;
const db = require('./sequelize/connection.js')

// const Questions = require('./sequelize/questions.js')

app.listen(port, () => {
  console.log(`Listening at listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

// Get the questions
app.get('/qa/questions', (req, res) => {
  res.send('Here are the questions')
})

// Get the answers
app.get('/qa/questions/:question_id/answers', (req, res) => {
  res.send('Here are the answers')
})

// Post a question
app.post('/qa/questions', (req, res) => {
  res.send('Question was posted')
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