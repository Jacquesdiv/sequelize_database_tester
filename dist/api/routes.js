"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const person_1 = require("../database/models/person");
const hobby_1 = require("../database/models/hobby");
const router = express_1.default.Router();
router.get('/person', async (req, res) => {
    const people = await person_1.Person.findAll({ include: hobby_1.Hobby });
    res.json(people);
});
router.post('/person', async (req, res) => {
    const person = await person_1.Person.create(req.body);
    res.json(person);
});
router.delete('/person/:id', async (req, res) => {
    const person = await person_1.Person.findByPk(req.params.id);
    if (!person)
        return res.status(404).send('Person not found');
    await person.destroy();
    res.json({});
});
router.get('/test', async (req, res) => {
    const personCount = await person_1.Person.count();
    for (let i = 0; i < 100; i++) {
        const person = await person_1.Person.create({
            name: `Test Person ${personCount + i + 1}`,
            age: Math.round(Math.random() * 100),
        });
        for (let j = 0; j < 3; j++) {
            const hobby = await hobby_1.Hobby.create({
                name: 'Test Hobby',
                personId: person.id,
            });
        }
        console.log(' Person Added', person.toJSON());
    }
    const people = await person_1.Person.findAll({ include: hobby_1.Hobby });
    res.json(people);
});
module.exports = router;
