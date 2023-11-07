import "dotenv/config";
import express, { Express } from "express";
import { createServer } from "http";
import cors from "cors";
import { databaseConnect } from "./config/database";
const mongoose = require("mongoose");
import superAdminRoutes from "./routes/superadmin/index";
import adminRoutes from "./routes/admin/index";

mongoose.set("strictQuery", false);

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
// app.disable("x-powered-by");
// app.use(express.json({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));
// app.use(cookieParser());

// app.use(
//   cors({
//     origin: process.env.ALLOWED_DOMAINS?.split(" "),
//     optionsSuccessStatus: 200,
//   })
// );

//ROUTES
app.get("/", (req, res) => {
  res.status(200).json({ name: "Api Worked Fine" });
});

// SUPERADMIN ROUTES 
app.use("/api/auth/superadmin", superAdminRoutes)

// ADMIN ROUTES 
app.use("/api/auth/admin", adminRoutes)





