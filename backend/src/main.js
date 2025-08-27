"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3001;
const PATH = process.env.EXPRESS_API_PATH || '/api';
app.get(`${PATH}`, (_req, res) => {
    res.status(200).json({ message: 'Hello from the server!' });
});
app.get(`${PATH}/items/create`, (_req, res) => {
    db_1.db.items.create()
        .then(() => {
        res.status(200).json({ message: 'Got request to create items table' });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ message: 'Error while trying to create items table' });
    })
        .finally();
});
app.post(`${PATH}/item`, (_req, res) => {
    res.send('Got a post request!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
/**
 * What this is going to need:
 * Import all of the endpoint types
 *
 * Either create a handler for each type here, or
 * import the handler that each type already has
 *
 *
 */ 
