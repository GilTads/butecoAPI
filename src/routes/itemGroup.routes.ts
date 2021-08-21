import { Router } from 'express';
import CreateItemGroupService from '../services/CreateItemGroupService';

const itemGroupRouter = Router();

itemGroupRouter.post('/', async (request, response) => {
  try {
    const { name } = request.body;

    const createItemGroup = new CreateItemGroupService();

    const itemGroup = await createItemGroup.execute({ name });

    return response.json(itemGroup);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default itemGroupRouter;
