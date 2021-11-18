const db = require('./connections.js');

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
