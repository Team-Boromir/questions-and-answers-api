const {db, Questions, Answers } = require('./sequelize/connection.js');

const getAnswers = () => {
  let answers = Answers.findAll()
  console.log(answers);
}