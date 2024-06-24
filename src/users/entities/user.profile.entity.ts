import { AbstractEntity } from '../../database/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class UserProfile extends AbstractEntity<UserProfile> {
  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
