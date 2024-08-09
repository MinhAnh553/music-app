import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as database from './config/database';
import { clientRoute } from './routes/client/indexRoute';

dotenv.config();

// app, port
const app: Express = express();
const port: number | string = process.env.PORT || 5503;

// Set pug
app.set('views', './views');
app.set('view engine', 'pug');

// Config static file
app.use(express.static(__dirname + '/public'));

// Database
database.connect();

// Route
app.use(clientRoute);

// Run
app.listen(port, () => {
    console.log(`Project back-end running at http://localhost:${port}...`);
});
