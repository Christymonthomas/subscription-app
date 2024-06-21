import express from "express";
import mongoose from "mongoose";
import Cors from "cors";
import { readdirSync } from "fs";

const morgan = require("morgan");
require("dotenv").config();

const app = express();
//db
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB CONNECTED"))
  .catch((err) => {
    console.log("DB CONNECTION ERROR", err);
  });

//middlewares

//
