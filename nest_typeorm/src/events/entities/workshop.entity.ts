import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Event } from './event.entity';

@Entity()
export class Workshop {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'datetime' })
  start: Date;

  @Column({ type: 'datetime' })
  end: Date;

  @Column({ type: 'integer', default: null })
  eventId: number;

  @ManyToOne(() => Event, (event) => event.workshops)
  event: Event;

  @Column()
  name: string;

  @CreateDateColumn()
  createdAt: Date;
}
