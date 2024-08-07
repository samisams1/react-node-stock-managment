import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package

import userRoutes from './modules/user/routes';
import authoRoutes from './modules/auth/routes';
import ItemRoutes from './modules/item/routes';
import ShopeItems from './modules/shope/routes';
import Branch   from './modules/branch/routes';
dotenv.config();

const app = express();
app.use(express.json());

// Enable CORS middleware
app.use(cors());
app.use(express.static('uploads'))
// Register routes
app.use('/users', userRoutes);
app.use('/auth', authoRoutes);
app.use('/item', ItemRoutes);
app.use('/shopeItem', ShopeItems);
app.use('/branch',Branch)
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(4000, () => {
  console.log('Server started on port 4000');
});