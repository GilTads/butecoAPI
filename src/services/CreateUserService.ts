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

    if (checkUserExists) {
      throw new Error('Email já cadastrado');
    }

    const user = usersRepositorory.create({
      name,
      admin,
      waiter,
      code,
      email,
      password,
    });

    await usersRepositorory.save(user);

    return user;
  }
}
