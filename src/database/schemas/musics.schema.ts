import mongoose from 'mongoose';

import '../database';

const musicSchema = new mongoose.Schema({
    artist: { type: String, require: true },
    albumTitle: { type: String, require: true, unique: true },
    albumImage: { type: String, require: true },
    musics: [{     
        songTitle: { type: String, require: true }, 
        songLink: { type: String, require: true },
        timeInMilliseconds: { type: Number }
    }],
    genre: { type: String, require: true },
    type: { type: String, require: true },
});


export default mongoose.model('musics', musicSchema);