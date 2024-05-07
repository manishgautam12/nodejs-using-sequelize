// db.js

import Sequelize from 'sequelize';

const sequelize = new Sequelize('nodejs_project', 'root', 'Sarla@#1234', {
  host: 'localhost',
  dialect: 'mysql'
});

export default sequelize;
