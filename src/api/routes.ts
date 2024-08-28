import express from 'express';

import { Person } from '../database/models/person';
import { Hobby } from '../database/models/hobby';

const router = express.Router();

router.get('/person', async (req, res) => {
  const people = await Person.findAll({ include: Hobby });
  res.json(people);
});

router.post('/person', async (req, res) => {
  const person = await Person.create(req.body);
  res.json(person);
});

router.delete('/person/:id', async (req, res) => {
  const person = await Person.findByPk(req.params.id);
  if (!person) return res.status(404).send('Person not found');

  await person.destroy();

  res.json({});
});

router.get('/test', async (req, res) => {
  const personCount = await Person.count();

  for (let i = 0; i < 100; i++) {
    const person = await Person.create({
      name: `Test Person ${personCount + i + 1}`,
      age: Math.round(Math.random() * 100),
    });

    for (let j = 0; j < 3; j++) {
      const hobby = await Hobby.create({
        name: 'Test Hobby',
        personId: person.id,
      });
    }

    console.log(' Person Added', person.toJSON());
  }

  const people = await Person.findAll({ include: Hobby });

  res.json(people);
});

export = router;
