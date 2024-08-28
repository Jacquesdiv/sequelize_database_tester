import { Table, Column, Model, HasMany } from 'sequelize-typescript';

import { Hobby } from './hobby';

@Table({ timestamps: true })
export class Person extends Model {
  @Column
  name: string;

  @Column
  age: number;

  @HasMany(() => Hobby)
  hobbies: Hobby[];
}
