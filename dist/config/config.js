"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require("dotenv/config");
exports.config = {
    database: {
        url: process.env.DB_URL || 'sqlite::memory:',
    },
    server: {
        port: process.env.PORT || 3000,
    },
};
