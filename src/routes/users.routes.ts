import { Router } from 'express';
import CreateUserService from '../services/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, admin, waiter, code, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      admin,
      waiter,
      code,
      email,
      password,
    });

    return response.json(user);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
