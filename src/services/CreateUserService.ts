import { hash } from 'bcryptjs';
import { getRepository } from 'typeorm';
import User from '../models/User';

interface Request {
  name: string;
  admin: boolean;
  waiter?: boolean;
  code: number;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({
    name,
    admin,
    waiter,
    code,
    email,
    password,
  }: Request): Promise<User> {
    const usersRepositorory = getRepository(User);

    const checkUserExists = await usersRepositorory.findOne({
      where: { email },
    });

    console.log(checkUserExists);

    if (checkUserExists) {
      throw new Error('Email já cadastrado');
    }

    const hashedPassword = await hash(password, 8);

    const user = usersRepositorory.create({
      name,
      admin,
      waiter,
      code,
      email,
      password: hashedPassword,
    });

    await usersRepositorory.save(user);

    return user;
  }
}
