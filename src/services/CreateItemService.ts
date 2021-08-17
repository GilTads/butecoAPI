import { getRepository } from 'typeorm';
import Item from '../models/Item';

interface Request {
  name: string;
  price: number;
  detail: string;
  item_group_id: string;
}

class CreateItemService {
  public async execute({
    name,
    price,
    detail,
    item_group_id,
  }: Request): Promise<Item> {
    const itemsRepository = getRepository(Item);

    const item = itemsRepository.create({
      name,
      price,
      detail,
      item_group_id,
    });

    await itemsRepository.save(item);

    return item;
  }
}

export default CreateItemService;
