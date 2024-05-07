import express from 'express';
import sequelize from './config/dbConfig.js';
import userRouter from './routers/user.router.js';
import dotenv from "dotenv";
import cors from 'cors'

const app = express();

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log('All models were synchronized successfully.');
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

app.use(express.json());
dotenv.config({
    path: './.env'
});
app.use(cors());

app.use('/v1/api/user', userRouter);

const PORT = process.env.PORT || 4040;

app.listen(PORT, async () => {
  await connect();
  console.log(`Server is running on port ${PORT}`);
});
