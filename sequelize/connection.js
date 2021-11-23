const { Sequelize } = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/questionsdb',
{
  logging: false
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
}, {
  timestamps: false
});


let Answers = db.define('answers', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  questions_id: {
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
}, {
  timestamps: false
});

let Photos = db.define('photos', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  answer_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  url: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

module.exports = {
  db,
  Questions,
  Answers,
  Photos
}
