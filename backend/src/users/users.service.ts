import { Injectable } from '@nestjs/common';
import {
  BadRequestException,
  NotFoundException,
} from '@nestjs/common/exceptions';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private dataSource: DataSource,
    private bcryptService: BcryptService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const errors = {};
    if (!createUserDto.username) {
      errors['username'] = 'Username is required';
    }
    if (!createUserDto.email) {
      errors['email'] = 'Email is required';
    }
    if (!createUserDto.password) {
      errors['password'] = 'Password is required';
    }
    if (Object.keys(errors).length > 0) {
      throw new BadRequestException(JSON.stringify(errors));
    }

    let newUser = new User();
    newUser.email = createUserDto.email;
    newUser.username = createUserDto.username;
    newUser.password = await this.bcryptService.generatePasswordHash(
      createUserDto.password,
    );

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      newUser = await queryRunner.manager.save(newUser);
      await queryRunner.commitTransaction();
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        if (err.sqlMessage.includes(`'${newUser.email}'`)) {
          throw new BadRequestException(
            JSON.stringify({ email: 'Email is already taken' }),
          );
        }
        if (err.sqlMessage.includes(`'${newUser.username}'`)) {
          throw new BadRequestException(
            JSON.stringify({ username: 'Username is already taken' }),
          );
        }
      }
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    delete newUser.password;
    return newUser;
  }

  async findOneByUsername(username: string) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const user = await queryRunner.manager.findOne(User, {
      where: { username },
    });
    await queryRunner.release();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findOne(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    const user = await queryRunner.manager.findOne(User, { where: { id } });
    await queryRunner.release();

    if (!user) {
      throw new NotFoundException('User not found');
    }

    delete user.password;

    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const errors = {};
    if (!updateUserDto.id) {
      errors['id'] = 'Id is required';
    }
    if (updateUserDto.id !== id) {
      errors['id'] = 'Id does not match';
    }
    if (Object.keys(errors).length > 0) {
      throw new BadRequestException(JSON.stringify(errors));
    }

    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.manager.update(User, { id }, updateUserDto);
    await queryRunner.release();

    return this.findOne(id);
  }

  async remove(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.manager.delete(User, { id });
    await queryRunner.release();
  }
}
