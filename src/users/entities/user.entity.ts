import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { UserProfile } from './user.profile.entity';
import { AbstractEntity } from '../../database/abstract.entity';

@Entity()
export class User extends AbstractEntity<User> {
  @Column()
  username: string;

  @OneToOne(() => UserProfile, { cascade: true })
  @JoinColumn()
  userProfile: UserProfile;
}
