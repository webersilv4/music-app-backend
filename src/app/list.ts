import { Request, Response } from 'express';
import musicsSchema from '../database/schemas/musics.schema';


// FAZ A LSIATGEM DAS MUSICAS SEM FILTROS
export const listMusics = async (req: Request, res: Response) => {
    await musicsSchema.find().then((r)=> {
        res.status(200).json(r);
    }).catch(err => console.log(err));
};

export const listenToMusic = async (req: Request, res: Response) => {

    const { id } = req.params;

    await musicsSchema.findOne({ '_id': id })
        .then((r)=> {
            res.status(200).json([r]);
        }).catch(err => res.status(400).json({ message: err.message.message }));
};

// CRIA E INSERE AS MUSICA NO DB
export const insertOneMusic = async (req: Request, res: Response) => {
    await musicsSchema.create(req.body)
        .then((r)=> {
            res.json(r);
        }).catch(err => console.log(err));
};



