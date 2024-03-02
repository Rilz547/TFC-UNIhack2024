import express, { json, Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
// Use middleware that allows us to access the JSON body of requests
app.use(json());
// Use middleware that allows for access from other domains
app.use(cors());
// for logging errors (print to terminal)
app.use(morgan('dev'));