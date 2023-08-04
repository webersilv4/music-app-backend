import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { insertOneMusic, listMusics } from './app/list';

const app = express();

app.use(cors({
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}));

app.get('/list', listMusics);
app.post('/create', insertOneMusic);




export default app;