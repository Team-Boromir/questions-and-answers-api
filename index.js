const express = require('express');
const app = express();
const port = 3121;
const db = require('./sequelize/connection.js');
const {getQuestions, getAnswers, addQuestion, addAnswer, markQuestionHelpful,  markAnswerHelpful, reportQuestion, reportAnswer} = require('./db/queries.js');
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Listening at listening at http://localhost:${port}`)
})


// Get the questions
app.get('/qa/questions', async (req, res) => {
  try {
    let product_id = req.query.product_id;
    let questions = await getQuestions(parseInt(req.query.product_id), req.query.page, req.query.count)
    res.send(questions)
  } catch (err) {
    res.sendStatus(400)
  }
})

// Get the answers
app.get('/qa/questions/:question_id/answers', async (req, res) => {
  try {
    let {question_id, page, count} = req.params;
    res.send(await getAnswers(question_id, page, count))
  } catch (err) {
    res.sendStatus(400)
  }
})

// Post a question
app.post('/qa/questions', async (req, res) => {
  try {
    let {body, name, email, product_id} = req.body;
    await addQuestion(body, name, email, product_id)
    res.send('Question was created!')
  } catch (err) {
    console.log('error posting question:', err)
    res.sendStatus(400)
  }
})

// Post an answer
app.post('/qa/questions/:question_id/answers', async (req, res) => {
  try {
    let {name, email, body, photos} = req.body;
    let question_id = req.params.question_id;
    await addAnswer(question_id, body, name, email, photos)
    res.send('Answer was created!')
  } catch (err) {
    console.log('Error creating answer:', err);
    res.sendStatus(400);
  }
})

// Mark question helpful
app.put('/qa/questions/:question_id/helpful', async (req, res) => {
  try {
    await markQuestionHelpful(req.params.question_id)
    res.send('Question data updated')
    console.log('marked question helpful')
  } catch (err) {
    res.sendStatus(400)
  }
})

// Report Question
app.put('/qa/questions/:question_id/report', async (req, res) => {
  try {
    await reportQuestion(req.params.question_id)
    res.send('Question data updated')
    console.log('reported question')
  } catch (err) {
    res.sendStatus(400)
  }
})

// Mark answer helpful
app.put('/qa/answers/:answer_id/helpful', async (req, res) => {
  try {
    await markAnswerHelpful(req.params.answer_id)
    res.send('Answer data updated')
    console.log('marked answer helpful')

  } catch (err) {
    res.sendStatus(400)
  }
})

// Report answer
app.put('/qa/answers/:answer_id/report', async (req, res) => {
  try {
    await reportAnswer(req.params.answer_id)
    res.send('Answer data updated')
    console.log('reported answer')

  } catch (err) {
    res.sendStatus(400)
  }
})