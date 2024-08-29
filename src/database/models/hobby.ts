import {
  Table,
  Column,
  Model,
  ForeignKey,
  IsUUID,
  PrimaryKey,
  DataType,
  Default,
} from 'sequelize-typescript';

import { Person } from './person';

@Table({ timestamps: true })
export class Hobby extends Model {
  @IsUUID(4)
  @Default(DataType.UUIDV4)
  @PrimaryKey
  @Column
  declare id: string;

  @Column
  name: string;

  @Column
  @ForeignKey(() => Person)
  personId: string;
}
