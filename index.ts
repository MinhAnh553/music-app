import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import * as database from './config/database';
dotenv.config();

// app, port
const app: Express = express();
const port: number | string = process.env.PORT || 5503;

// Set pug
app.set('views', './views');
app.set('view engine', 'pug');

// Database
database.connect();

// Route
app.get('/topics', (req: Request, res: Response) => {
    res.render('client/pages/topic/index', {
        pageTitle: 'Chủ đề bài hát',
    });
});

app.listen(port, () => {
    console.log(`Project back-end running at http://localhost:${port}...`);
});
