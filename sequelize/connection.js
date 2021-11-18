const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/questionsdb',
{
  // logging: false
});

async function testDatabase () {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

db.sync()

// let results = async () => await Photos.findAll()
// console.log('photos', results())
testDatabase()

module.exports = db;