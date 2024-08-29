"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const config_1 = require("../config/config");
const person_1 = require("./models/person");
const hobby_1 = require("./models/hobby");
class Database {
    static _instance;
    _sequelize;
    constructor() {
        this._sequelize = new sequelize_typescript_1.Sequelize(config_1.config.database.url, {
            models: [person_1.Person, hobby_1.Hobby],
            logging: false,
        });
    }
    static get instance() {
        if (!this._instance) {
            this._instance = new Database();
        }
        return this._instance;
    }
    get sequelize() {
        return this._sequelize;
    }
    async connect() {
        try {
            await this._sequelize.authenticate();
            console.log('Connected to: ', config_1.config.database.url);
            await this._sequelize.sync({ force: true });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error;
        }
    }
}
exports.Database = Database;
