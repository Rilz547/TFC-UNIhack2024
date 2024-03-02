import express, { json, Request, Response } from 'express';
import errorHandler from 'middleware-http-errors';
import morgan from 'morgan';
import config from './config.json';
import cors from 'cors';
import fs from 'fs';
import { getData, setData } from './dataStore';
import { reviewPost } from './review';
import multer from 'multer';
import { clear } from './helpers';

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/') // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname) // Use original filename for the uploaded file
    }
})

// Create a multer instance with the configured storage
const upload = multer({ storage: storage });
  
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

// Post review requests
app.post('/reviewPost', (req: Request, res: Response) => {
    const { reviewTitle, reviewer, rating, quality, price, service, reviewText, restaurantId } = req.body;
    res.json(reviewPost(reviewTitle, reviewer, rating, quality, price, service, reviewText, restaurantId));
    save();
});

// Clear requests
app.delete('/clear', (req: Request, res: Response) => {
    res.json(clear());
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
