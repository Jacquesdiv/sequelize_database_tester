import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';

import { Person } from './person';

@Table({ timestamps: true })
export class Hobby extends Model {
  @Column
  name: string;

  @Column
  @ForeignKey(() => Person)
  personId: string;
}
