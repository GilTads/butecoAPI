import { EntityRepository, Repository } from 'typeorm';
import BarTable from '../models/BarTable';

@EntityRepository(BarTable)
class BarTablesRepository extends Repository<BarTable> {}

export default BarTablesRepository;
