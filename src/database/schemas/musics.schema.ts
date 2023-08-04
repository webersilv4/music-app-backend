import mongoose from 'mongoose';

import '../database';

const musicSchema = new mongoose.Schema({
    title: { type: String, require: true },
    album: { type: String, require: true },
    image: { type: String, require: true },
    link: { type: String, require: true },
    artist: { type: String, require: true },
    type: { type: String, require: true },
});


export default mongoose.model('musics', musicSchema);