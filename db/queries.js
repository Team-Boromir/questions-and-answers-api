const {db, Questions, Answers, Photos } = require('../sequelize/connection.js');

// Questions Query
const getQuestions = async(product_id) => {
  let questions = await Questions.findAll({
    attributes: [

    ]
  })
}


// Answers query
const getAnswers = async (questionId) => {
  let answers = await Answers.findAll({
    where: {questions_id: questionId}
  })
  let results = [];
  for (var answer of answers) {
    // console.log(answer.dataValues)
    let current = answer.dataValues
    let output = {
      answer_id: current.id,
      body: current.body,
      date: current.date,
      answerer_name: current.name,
      helpfulness: current.helpful
    }
    // console.log('output', output)
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
    page: 0,
    count: 5,
    results: results
  };
  console.log('answerList', answerList)
  return answerList
}

getAnswers(1)

// Create a list