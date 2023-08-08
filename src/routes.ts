import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { 
    createNewAlbum, 
    listMusics, 
    listOneMusic, 
    insertMusicIntoAlbum 
} from './app/list';

const app = express();

app.use(express.json());
app.use(cors({
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}));


app.get('/list-musics', listMusics);
// app.get('/list-musics', listMusics);
app.get('/listen-to-music/:id', listOneMusic);


app.post('/create-new-album', createNewAlbum);
app.put('/insert-music-in-album', insertMusicIntoAlbum);





export default app;