import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UserProfile } from './entities/user.profile.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userProfile = new UserProfile({
      ...createUserDto.userProfile,
    });
    const user = new User({
      ...createUserDto,
      userProfile,
    });
    await this.entityManager.save(user);
  }

  async findAll() {
    return this.usersRepository.find({
      relations: { userProfile: true },
    });
  }

  async findOne(id: number) {
    return this.usersRepository.findOne({
      where: { id },
      relations: { userProfile: true },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: { userProfile: true },
    });

    if (!user) {
      throw new Error('User not found');
    }

    user.username = updateUserDto.username;

    if (user.userProfile) {
      user.userProfile.firstName = updateUserDto.userProfile.firstName;
      user.userProfile.lastName = updateUserDto.userProfile.lastName;
      await this.entityManager.save(user.userProfile);
    } else {
      const userProfile = new UserProfile({
        ...updateUserDto.userProfile,
      });
      user.userProfile = userProfile;
    }

    await this.entityManager.save(user);
  }

  async remove(id: number) {
    await this.usersRepository.delete({ id });
  }
}
