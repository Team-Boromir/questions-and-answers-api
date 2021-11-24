const {db, Questions, Answers, Photos } = require('../sequelize/connection.js');

// Questions Query
const getQuestions = async(product_id, page, count) => {
  page = page || 1;
  count = count || 5;
  let results = [];
  let questions = await Questions.findAll({
    offset: page * count - count,
    limit: 5,
    attributes: [
      ['id', 'question_id'],
      ['body', 'question_body'],
      ['date', 'question_date'],
      ['name', 'asker_name'],
      ['helpful', 'question_helpfulness'],
      'reported'
    ],
    where: {product_id: product_id}
  })
  for (var question of questions) {
    let data = question.dataValues;
    data.answers = {};
    let currentAnswers = await getAnswers(data.question_id);
    for (let answer of currentAnswers.results) {
      data.answers[answer.answer_id] = answer;
      // console.log('answer format:', answer);
    }
    // console.log('currentAnswers', currentAnswers)
    results.push(question.dataValues);
  }
  let questionsList = {
    product_id: product_id,
    results: results
  }
  return questionsList;
}

getQuestions(1)


// Answers query
const getAnswers = async (questionId, page, count) => {
  page = page || 1;
  count = count || 5;
  let answers = await Answers.findAll({
    limit: count,
    offset: page * count - count,
    where: {questions_id: questionId}
  })
  let results = [];
  for (var answer of answers) {
    let current = answer.dataValues
    let output = {
      answer_id: current.id,
      body: current.body,
      date: current.date,
      answerer_name: current.name,
      helpfulness: current.helpful
    }
    let getPhotos = async (answer_id) => {
      let photos =  await Photos.findAll({
        attributes: [
          'id',
          'url'
        ],
        where: {answer_id: answer_id}
      })
      let photoArray = [];
      for (var photo of photos) {
        photoArray.push(photo.dataValues)
      }
      return photoArray;
    }
    output.photos = await getPhotos(current.id);
    results.push(output);
  }
  let answerList = {
    question: questionId,
    page: page,
    count: count,
    results: results
  };
  // console.log('answerList', answerList)
  return answerList
}

// getAnswers(1)
