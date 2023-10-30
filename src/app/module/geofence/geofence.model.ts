import { Schema, model } from "mongoose";
import { IGeoFence } from "./geofence.interface";

const geofenceSchema = new Schema<IGeoFence>({
    name: String,
    latitude: Number,
    longitude: Number,
    radius: Number
},
    { timestamps: true }
);

const geoFence = model<IGeoFence>("geoFence", geofenceSchema);
export default geoFence;