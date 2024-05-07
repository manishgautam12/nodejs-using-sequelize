import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/dbConfig.js'; 

const User = sequelize.define('user', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
},
{
  timestamps: true,
});

// Sequelize hook to sync the model before creating a user
User.beforeCreate(async (user, options) => {
  await sequelize.sync(); // Synchronize the model with the database before creating the user
});

export default User;
