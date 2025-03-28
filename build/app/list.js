"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.insertMusicIntoAlbum = exports.createNewAlbum = exports.listOneMusic = exports.listMusics = void 0;
var musics_schema_1 = __importDefault(require("../database/schemas/musics.schema"));
// FAZ A LSIATGEM DAS MUSICAS SEM FILTROS
var listMusics = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, musics_schema_1.default.find().then(function (r) {
                    res.status(200).json(r);
                }).catch(function (err) { return console.log(err); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.listMusics = listMusics;
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
var listOneMusic = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var id;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, musics_schema_1.default.findOne({ '_id': id })
                        .then(function (r) {
                        res.status(200).json([r]);
                    }).catch(function (err) { return res.status(400).json({ message: err.message.message }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.listOneMusic = listOneMusic;
// CRIA E INSERE AS MUSICA NO DB
var createNewAlbum = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, musics_schema_1.default.create(req.body)
                    .then(function (r) {
                    res.json(r);
                }).catch(function () { return res.status(400).json({ err: 'Já existe um album deste artista' }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.createNewAlbum = createNewAlbum;
var insertMusicIntoAlbum = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, id, songLink, songTitle, timeInMilliseconds;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, id = _a.id, songLink = _a.songLink, songTitle = _a.songTitle, timeInMilliseconds = _a.timeInMilliseconds;
                return [4 /*yield*/, musics_schema_1.default.findOneAndUpdate({ id: id }, { $addToSet: { musics: {
                                songLink: songLink,
                                songTitle: songTitle,
                                timeInMilliseconds: timeInMilliseconds
                            } } })
                        .then(function (r) {
                        res.json(r);
                    }).catch(function (err) { return res.json(err); })];
            case 1:
                _b.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.insertMusicIntoAlbum = insertMusicIntoAlbum;
