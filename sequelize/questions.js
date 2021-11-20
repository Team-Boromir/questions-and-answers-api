const db = require('./connection.js');
const { Sequelize } = require('sequelize');
// const csv = require('csv-parser');
// const fs = require('fs');
// const results = [];

let Questions = db.define('questions', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  product_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  body: {
    type: Sequelize.STRING(1000),
    allowNull: false
  },
  date: {
    type: Sequelize.BIGINT,
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  reported: {
    type: Sequelize.INTEGER,
  },
  helpful: {
    type: Sequelize.INTEGER,
  }
});

module.exports = Questions;

// fs.createReadStream('../raw_data/questions.csv')
//   .pipe(csv())
//   .on('data', (data) => {
//     results.push(data);
//   })
//   .on('end', () => {
//     Questions.bulkCreate(results)
//     .catch((error)=> {
//       console.log('error was:', error)
//     })
//   })
