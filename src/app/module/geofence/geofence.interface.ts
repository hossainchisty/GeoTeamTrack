import { Document } from "mongoose";

export interface IGeoFence extends Document {
    name: string;
    latitude: number;
    longitude: number;
    radius: number;
}