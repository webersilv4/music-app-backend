import { Request, Response } from 'express';
import musicsSchema from '../database/schemas/musics.schema';

import { IinsertNewSound } from '../../@types';

// FAZ A LSIATGEM DAS MUSICAS SEM FILTROS
export const listMusics = async (req: Request, res: Response) => {
    await musicsSchema.find().then((r)=> {
        res.status(200).json(r);
    }).catch(err => console.log(err));
};

// FAZ A LSIATGEM DAS MUSICAS SEM FILTROS
// export const listMusics = async (req: Request, res: Response) => {
//     await musicsSchema.find().then((response:Array<IListMusics>)=> {
//         const result: Array<object> = [];
//         response.forEach((element)=>{
//             console.log(element);
//             result.push(element.musics[0]);
//         });
//         res.status(200).json(result);
//     }).catch(err => console.log(err));
// };


export const listOneMusic = async (req: Request, res: Response) => {

    const { id } = req.params;

    await musicsSchema.findOne({ '_id': id })
        .then((r)=> {
            res.status(200).json([r]);
        }).catch(err => res.status(400).json({ message: err.message.message }));
};

// CRIA E INSERE AS MUSICA NO DB
export const createNewAlbum = async (req: Request, res: Response) => {
    await musicsSchema.create(req.body)
        .then((r)=> {
            res.json(r);
        }).catch(()=> res.status(400).json({err: 'Já existe um album deste artista'}));
};


export const insertMusicIntoAlbum = async (req: Request, res: Response) => {
    
    const { id, songLink, songTitle, timeInMilliseconds }: IinsertNewSound = req.body;
    
    await musicsSchema.findOneAndUpdate({ id }, 
        { $addToSet: { musics: { 
            songLink, 
            songTitle, 
            timeInMilliseconds 
        }} })
        .then((r)=> {
            res.json(r);
        }).catch(err => res.json(err));
};



