import jwt  from "jsonwebtoken";
import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import { APIError } from "../../interface/APIError";
import { jwtHelper } from "../../helpers/jwtHelper";
import config from "../../config";

const auth =
  (...requiredRoles: string[]) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(' ')[1];

    try {
      if (!token) {
        throw new APIError(httpStatus.UNAUTHORIZED, "Unauthorization Access!");
      }

      // Access Token Verificaiton
      const user = jwtHelper.verifyToken(token, config.JWT_SECRET as string);

      // Role Authorization
      if (requiredRoles.length && !requiredRoles.includes(user.role)) {
        throw new APIError(httpStatus.BAD_REQUEST, "Authenticaiton Required!");
      }

      req.user = user;

      next();
    } catch (error) {
      next(error);
    }
  };

export default auth;
