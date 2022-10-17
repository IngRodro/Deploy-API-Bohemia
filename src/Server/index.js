import express from 'express';
import cors from 'cors';
import getConfig from 'config';
import { initializeDB } from './db';

const { port } = getConfig();

const app = express();

// creating Server
const initializeServer = async (routes) => {
  // initialize DB
  await initializeDB();

  // use cors
  app.use(cors());

  // json parse
  app.use(express.json());

  // set urls
  app.use(routes);

  // create express app
  app.listen(port, () => {
    console.log(`APP is listening on http://localhost:${port}`);
  });
};

export default initializeServer;
