"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hobby = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const person_1 = require("./person");
let Hobby = class Hobby extends sequelize_typescript_1.Model {
    name;
    personId;
};
exports.Hobby = Hobby;
__decorate([
    (0, sequelize_typescript_1.IsUUID)(4),
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Hobby.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Hobby.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    (0, sequelize_typescript_1.ForeignKey)(() => person_1.Person),
    __metadata("design:type", String)
], Hobby.prototype, "personId", void 0);
exports.Hobby = Hobby = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true })
], Hobby);
