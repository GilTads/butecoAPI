import { Router } from 'express';
import User from '../models/User';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    return response.send();
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;