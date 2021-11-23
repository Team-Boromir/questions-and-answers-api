const {db, Questions, Answers, Photos } = require('../sequelize/connection.js');

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
  console.log('answerList', answerList)
  return answerList
}

getAnswers(1)
