import express, { json, Request, Response } from 'express';
import { echo } from './echo';
import errorHandler from 'middleware-http-errors';
import morgan from 'morgan';
import config from './config.json';
import cors from 'cors';
import fs from 'fs';
import { getData, setData } from './dataStore';
import { reviewPost } from './review';

// Check if database.json exists and load it
if (fs.existsSync('./database.json')) {
    const dbString = fs.readFileSync('./database.json');
    setData(JSON.parse(String(dbString)));
}
  
// Save the database to file
const save = () => {
    const jsonString = JSON.stringify(getData());
    fs.writeFileSync('./database.json', jsonString);
};
  
// Set up web app
const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors (print to terminal)
app.use(morgan('dev'));
app.use('/imgurl', express.static('imgurl'));
const PORT: number = parseInt(process.env.PORT || config.port);
const HOST: string = process.env.IP || 'localhost';

// Example get request
app.get('/echo', (req: Request, res: Response, next) => {
    const data = req.query.echo as string;
    return res.json(echo(data));
});

app.post('/reviewPost', (req: Request, res: Response) => {
    const { reviewTitle, reviewer, rating, quality, price, service, reviewText, restaurantId } = req.body;
    res.json(reviewPost(reviewTitle, reviewer, rating, quality, price, service, reviewText, restaurantId));
    save();
});


// Keep this BENEATH route definitions
// handles errors nicely
app.use(errorHandler());

// start server
const server = app.listen(PORT, HOST, () => {
  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server started on port ${PORT} at ${HOST}`);
});

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});