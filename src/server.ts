import express from 'express';
import cors from 'cors';

import { Database } from './database/database';
import { config } from './config/config';
import routes from './api/routes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('running'));
app.use('/api', routes);

app.listen(config.server.port, () => {
  console.log(`Server is listening on PORT ${config.server.port}`);
});

Database.instance.connect().catch((err) => {
  throw err;
});
