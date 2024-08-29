import {
  Table,
  Column,
  Model,
  HasMany,
  IsUUID,
  PrimaryKey,
  DataType,
  Default,
} from 'sequelize-typescript';

import { Hobby } from './hobby';

@Table({ timestamps: true })
export class Person extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  name: string;

  @Column
  age: number;

  @HasMany(() => Hobby)
  hobbies: Hobby[];
}
