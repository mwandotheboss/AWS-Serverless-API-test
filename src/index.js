import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

const { routes: userRoutes, } = './user/routes';

const app = express();
app.use(cors());
app.use(json());

app.use('/user', userRoutes);

module.exports = app;