const {db, Questions, Answers, Photos } = require('../sequelize/connection.js');


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
      // console.log('photos', photos)
    }
    output.photos = await getPhotos(current.id);
    console.log('this', output)
  }
  return answers;
}

getAnswers(1)

// Create a list