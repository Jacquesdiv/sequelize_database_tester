import { Sequelize } from 'sequelize-typescript';

import { config } from '../config/config';

import { Person } from './models/person';
import { Hobby } from './models/hobby';

export class Database {
  private static _instance: Database;
  private _sequelize: Sequelize;

  private constructor() {
    this._sequelize = new Sequelize(config.database.url, {
      models: [Person, Hobby],
      logging: false,
    });
  }

  public static get instance(): Database {
    if (!this._instance) {
      this._instance = new Database();
    }
    return this._instance;
  }

  public get sequelize(): Sequelize {
    return this._sequelize;
  }

  public async connect(): Promise<void> {
    try {
      await this._sequelize.authenticate();
      console.log('Connected to: ', config.database.url);
      await this._sequelize.sync();
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      throw error;
    }
  }
}
