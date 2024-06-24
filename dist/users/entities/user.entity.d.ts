import { UserProfile } from './user.profile.entity';
import { AbstractEntity } from '../../database/abstract.entity';
export declare class User extends AbstractEntity<User> {
    username: string;
    userProfile: UserProfile;
}
