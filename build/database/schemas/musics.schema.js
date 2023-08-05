'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
var mongoose_1 = __importDefault(require('mongoose'));
require('../database');
var musicSchema = new mongoose_1.default.Schema({
    title: { type: String, require: true },
    album: { type: String, require: true },
    image: { type: String, require: true },
    link: { type: String, require: true },
    artist: { type: String, require: true },
    type: { type: String, require: true },
});
exports.default = mongoose_1.default.model('musics', musicSchema);
