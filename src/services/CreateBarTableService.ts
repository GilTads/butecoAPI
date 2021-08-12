import { getRepository } from 'typeorm';
import BarTable from '../models/BarTable';
import BarTablesRepository from '../repositories/BarTablesRepository';

interface Request {
  tableNumber: number;
  status?: boolean;
}

class CreateBarTableService {
  public async execute({ tableNumber, status }: Request): Promise<BarTable> {
    const barTablesRepository = getRepository(BarTablesRepository);

    const barTable = barTablesRepository.create({
      tableNumber,
      status,
    });

    await barTablesRepository.save(barTable);

    return barTable;
  }
}

export default CreateBarTableService;
