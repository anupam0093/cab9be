import "dotenv/config";
import dotenv from "dotenv";
import express, { Express, Request } from "express";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { databaseConnect } from "./config/database";
const mongoose = require("mongoose");
import superAdminRoutes from "./routes/superadmin/index";
import adminRoutes from "./routes/admin/index";
import rootEndPoint from "./config/endpoint";
import users from "./models/users";

mongoose.set("strictQuery", false);

dotenv.config();
dotenv.config({
  path: ".env",
  override: true,
});

// INITIALIZING EXPREESS
const app: Express = express();
const server = createServer(app);
const port = process.env.PORT;
app.use(cors());
databaseConnect();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// PORT LISTEN
server.listen(port, () => {
  console.log(`Server Runnig http://localhost:${port}`);
});

// MIDDLEWARES
app.disable("x-powered-by");
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());


// ALLOWED FOR MULIPLE CORS
app.use(
  cors({
    origin: process.env.ALLOWED_DOMAINS?.split(" "),
    optionsSuccessStatus: 200,
  })
);


app.use('/customer', express.static('upload/images'));

//ROUTES
app.get("/", (req, res) => {
  res.status(200).json({ name: "Api Worked Fine" });
});

// DYNAMIC ROUTES...
const routes = [
  {
    path: `${rootEndPoint}/auth/superadmin`,
    func: superAdminRoutes,
  },
  {
    path: `${rootEndPoint}/auth/admin`,
    func: adminRoutes
  }
];

app.get('/verify', async (req, res) => {
  try {
    const userId = req.query.id;
    await users.updateOne({ _id: userId }, { $set: { status: "VERIFIED" } });
    return res.send('Email verified successfully!');
  } catch (error) {
    console.error(error);
    return res.status(500).send('Internal Server Error');
  }
});

routes.forEach(({ path, func }) => {
  app.use(path, func);
});









