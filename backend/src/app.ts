import express from 'express';
import cors from 'cors';
import passport from 'passport';
import './config/passport'; 

const app = express();

app.use(cors());
app.use(express.json());
app.use(passport.initialized());

export default app;