import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';
export declare class UsersService {
    private readonly usersRepository;
    private readonly entityManager;
    constructor(usersRepository: Repository<User>, entityManager: EntityManager);
    create(createUserDto: CreateUserDto): Promise<void>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<void>;
    remove(id: number): Promise<void>;
}
