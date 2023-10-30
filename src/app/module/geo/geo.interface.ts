import { Document } from "mongoose";
import { IUser } from '../user/user.interface';

export interface IGeoLocation extends Document {
    user: IUser;
    latitude: number;
    longitude: number;
}

export interface IGeoFence extends Document {
    name: string;
    latitude: number;
    longitude: number;
    radius: number;
}