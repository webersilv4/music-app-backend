'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { 'default': mod };
};
Object.defineProperty(exports, '__esModule', { value: true });
var dotenv_1 = __importDefault(require('dotenv'));
dotenv_1.default.config();
var express_1 = __importDefault(require('express'));
var cors_1 = __importDefault(require('cors'));
var list_1 = require('./app/list');
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    'optionsSuccessStatus': 204
}));
app.get('/list', list_1.listMusics);
app.get('/listen-to-music/:id', list_1.listOneMusic);
app.post('/create-new-album', list_1.createNewAlbum);
app.put('/insert-music-in-album', list_1.insertMusicIntoAlbum);
exports.default = app;
