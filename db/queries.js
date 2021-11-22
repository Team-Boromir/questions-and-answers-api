const {db, Questions, Answers, Photos } = require('../sequelize/connection.js');


// Answers practice query
const getAnswers = async (questionId) => {
  let answers = await Answers.findAll({
    where: {questions_id: questionId}
  })
  console.log(answers.dataValues)
  for (var answer of answers) {
    console.log(answer.dataValues)
  }
  return answers;
}

// console.log('answers', getAnswers());

getAnswers(4)

// Create a list