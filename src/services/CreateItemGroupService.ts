import { getRepository } from 'typeorm';
import ItemGroup from '../models/ItemGroup';

interface Request {
  name: string;
}

class CreateItemGroupService {
  public async execute({ name }: Request): Promise<ItemGroup> {
    const itemGroupRepository = getRepository(ItemGroup);

    const upperCaseName = name.toUpperCase();

    const checkItemGroupExists = await itemGroupRepository.findOne({
      where: { name: upperCaseName },
    });

    console.log(checkItemGroupExists);

    if (checkItemGroupExists) {
      throw new Error('Grupo de item já criado');
    }

    const itemGroup = itemGroupRepository.create({ name: upperCaseName });

    await itemGroupRepository.save(itemGroup);

    return itemGroup;
  }
}

export default CreateItemGroupService;
