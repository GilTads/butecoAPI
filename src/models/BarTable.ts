import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('bar_tables')
class BarTable {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  tableNumber: number;

  @Column()
  status?: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default BarTable;
