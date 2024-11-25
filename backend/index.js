"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv = __importStar(require("dotenv"));
const pg_1 = require("pg");
const express_1 = __importDefault(require("express"));
dotenv.config();
const client = new pg_1.Client({
    connectionString: process.env.PGURI,
});
client.connect();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/api', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield client.query('SELECT animals.name, animals.image, animals.weight, animal_types.name AS type_name FROM animals JOIN animal_types ON animal_types.id = animals.type');
    res.send(rows);
}));
app.post('/api/post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, image, weight, type } = req.body;
    try {
        const { rows } = yield client.query('INSERT INTO animals (name, image, weight, type) VALUES ($1,$2,$3,$4) RETURNING *', [name, image, weight, type]);
        res.status(201).json(rows[0]);
    }
    catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).send('Server error');
    }
}));
app.get('/api/types', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { rows } = yield client.query('SELECT * FROM animal_types');
    res.send(rows);
}));
app.listen(3000, () => {
    console.log('Webbtjänsten kan nu ta emot anrop.');
});
