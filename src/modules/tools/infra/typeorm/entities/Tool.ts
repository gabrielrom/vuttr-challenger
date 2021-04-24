import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity('tools')
class Tool {
  @PrimaryColumn()
  id: string;

  @Column()
  title: string;

  @Column()
  link: string;

  @Column()
  description: string;

  @Column('simple-array')
  tags: string[];

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Tool };
