import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const checkUserExists = this.usersRepository.findByEmail(email);

    if (checkUserExists) throw new Error("Email already exists.");

    return this.usersRepository.create({
      name,
      email,
    });
  }
}

export { CreateUserUseCase };
