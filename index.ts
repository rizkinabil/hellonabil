import mongoose from 'mongoose';
import { Server } from './app/Server';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const port = 3333;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    const server = new Server(app);
    server.start(port);
  })
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
  });
