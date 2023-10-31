import { Document, Model } from "mongoose";

type Name = {
  firstName: string;
  lastName: string;
};

type Role = "employee" | "admin";

export interface IUser extends Document {
  _id: string;
  name: Name;
  role: Role;
  password: string;
  phoneNumber: string;
  address: string;
  NID?: string;
}

export interface UserModel extends Model<IUser> {
  isUserExist(phoneNumber: string): Pick<IUser, "_id" | "password" | "role">;
  isPassMatched(givenPass: string, savedPass: string): boolean;
}

export type IUserSearchFilter = {
  searchTerm?: string;
  firstName?: string;
  lastName?: string;
  role?: Role;
  address?: string;
};
