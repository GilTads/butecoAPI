import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import ItemGroup from './ItemGroup';

@Entity('items')
class Items {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  detail: string;

  @Column()
  status: boolean;

  @Column()
  item_group_id: string;

  @ManyToOne(() => ItemGroup)
  @JoinColumn({ name: 'item_group_id' })
  item_group: ItemGroup;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Items;
