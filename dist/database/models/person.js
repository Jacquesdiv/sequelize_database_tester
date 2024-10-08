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
exports.Person = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const hobby_1 = require("./hobby");
let Person = class Person extends sequelize_typescript_1.Model {
    name;
    age;
    hobbies;
};
exports.Person = Person;
__decorate([
    (0, sequelize_typescript_1.IsUUID)(4),
    (0, sequelize_typescript_1.Default)(sequelize_typescript_1.DataType.UUIDV4),
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Person.prototype, "id", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Person.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Person.prototype, "age", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => hobby_1.Hobby),
    __metadata("design:type", Array)
], Person.prototype, "hobbies", void 0);
exports.Person = Person = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true })
], Person);
