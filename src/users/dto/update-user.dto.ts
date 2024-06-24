import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserProfileDto } from './update-user-profile.dto';

export class UpdateUserDto {
    username: string
    userProfile: UpdateUserProfileDto;

}
