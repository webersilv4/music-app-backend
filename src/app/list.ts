import { Request, Response } from 'express';
import musicsSchema from '../database/schemas/musics.schema';


// FAZ A LSIATGEM DAS MUSICAS SEM FILTROS
export const listMusics = async (req: Request, res: Response) => {
    await musicsSchema.find().then((r)=> {
        res.status(200).json(r);
    }).catch(err => console.log(err));
};

// CRIA E INSERE AS MUSICA NO DB
export const insertOneMusic = async (req: Request, res: Response) => {
    await musicsSchema.create({
        'title': 'Saudade do tempo',
        'album': 'Viva',
        'image': 'image.png',
        'link': 'https://dcs.megaphone.fm/ROOSTER2214960577.mp3?key=2c02f49702ffbbbe2d05de4c90cc1ef5&request_event_id=9ca20d20-ad48-4a0a-b235-34815362c1bf',
        'artist': 'maneva',
        'type': 'music'
    })
        .then((r)=> {
            res.json(r);
        }).catch(err => console.log(err));
};



