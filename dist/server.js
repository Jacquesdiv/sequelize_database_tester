"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database/database");
const config_1 = require("./config/config");
const routes_1 = __importDefault(require("./api/routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => res.send('running'));
app.use('/api', routes_1.default);
app.listen(config_1.config.server.port, () => {
    console.log(`Server is listening on PORT ${config_1.config.server.port}`);
});
database_1.Database.instance.connect().catch((err) => {
    throw err;
});
