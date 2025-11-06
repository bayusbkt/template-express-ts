import { Response } from "express";

class ResponseHandler {
  success(res: Response, code = 200, message: string, data: any = null) {
    return res.status(code).json({
      status: true,
      message,
      data,
    });
  }

  error(res: Response, code = 400, message: string, data: any = null) {
    return res.status(code).json({
      status: false,
      message,
      data,
    });
  }
}

export const response = new ResponseHandler();
