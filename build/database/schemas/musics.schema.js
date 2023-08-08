'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
var mongoose_1 = __importDefault(require('mongoose'));
require('../database');
var musicSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model('musics', musicSchema);
