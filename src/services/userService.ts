import UserDTO from "../types/user";
import IUser from "../types/user";
import prisma from "../utils/client";

class UserService {
  async getAllUsers(): Promise<IUser[]> {
    const users = await prisma.user.findMany();
    return users;
  }

  async createUser(data: Partial<UserDTO>): Promise<IUser> {
    const user = await prisma.user.create({
      data,
    });

    return user;
  }
}

export default new UserService();
