import { Router } from 'express';

import CreateItemService from '../services/CreateItemService';

const itemsRouter = Router();

itemsRouter.post('/', async (request, response) => {
  try {
    const { name, price, detail, item_group_id, user_id } = request.body;

    const createItem = new CreateItemService();

    const item = await createItem.execute({
      name,
      price,
      detail,
      item_group_id,
      user_id,
    });

    return response.json(item);
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default itemsRouter;
