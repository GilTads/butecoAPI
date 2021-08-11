import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('bar_tables')
class BarTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tableNumber: number;

  @Column()
  status?: boolean;
}

export default BarTable;
