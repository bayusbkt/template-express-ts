import { Request, Response } from "express";
import UserDTO from "../types/user"; 
import userService from "../services/userService";
import { response } from "../utils/responseHandler";

class UserController {
  async loadAllUsers(req: Request, res: Response) {
    try {
      const users = await userService.getAllUsers();
      return response.success(res,200,"Berhasil mendapatkan data pengguna.", users);
    } catch (error) {
      return response.error(res, 400, "Error loading users", (error as Error).message);
    }
  }

  async createUser(req: Request, res: Response) {
    const { name, emplid, position } = req.body;

    const data: UserDTO = {
      name,
      emplid,
      position,
      created_at: new Date().toISOString(),
      created_by: "admin",
    }
    try {
      const user = await userService.createUser(data);
      return response.success(res,200,"Berhasil membuat pengguna.", user);
    } catch (error) {
      return response.error(res, 400, "Gagal membuat pengguna", (error as Error).message);
    }
  }
}

export default new UserController();
