import mongoose from "mongoose";
import gradesSchema from "./gradesSchema.js";

const db = {};
db.mongoose = mongoose;
db.url = process.env.MONGODB;
db.grade = gradesSchema(mongoose);

export { db };
