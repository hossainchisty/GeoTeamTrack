import mongoose, { Schema, model } from "mongoose";
import { IGeoLocation, IGeoFence } from "./geo.interface";


const geoLocationSchema = new Schema<IGeoLocation>({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    latitude: Number,
    longitude: Number,
},
    { timestamps: true }
);

const geofenceSchema = new Schema<IGeoFence>({
    name: String,
    latitude: Number,
    longitude: Number,
    radius: Number
},
    { timestamps: true }
);

const geoLocation = model<IGeoLocation>("geoLocation", geoLocationSchema);
export default geoLocation;