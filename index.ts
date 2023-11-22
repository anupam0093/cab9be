import "dotenv/config";
import dotenv from "dotenv";
import express, { Express } from "express";
import { createServer } from "http";
import cors from "cors";
import cookieParser from "cookie-parser";
import { databaseConnect } from "./config/database";
const mongoose = require("mongoose");
import superAdminRoutes from "./routes/superadmin/index";
import adminRoutes from "./routes/admin/index";
import settingsRoutes from "./routes/admin/settings"
import rootEndPoint from "./config/endpoint";
import users from "./models/users";
import { STATUS } from "./config/roles";
import { ResponseMessages } from "./contants/response";
import { handleAdminLogin } from "./controllers/superadmin";
import { isVerified } from "./middlewares/utils";

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

app.use('/images', express.static('upload/images'));

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
  },
  {
    path: `${rootEndPoint}/auth/admin/settings`,
    func: settingsRoutes
  }
];

app.post("/api/auth/signin", handleAdminLogin)

// app.get('/verify/:token', (req, res) => {
//   try {
//     const token = req.params.token;

//     // Verify the token using the secret key
//     jwt.verify(token, secretKey, (err, decoded) => {
//       if (err) {
//         console.error(err);
//         return res.status(401).send('Token verification failed');
//       }

//       // Token is valid, you can access the decoded information
//       const { name, email, phone, /* other claims */ } = decoded;

//       // Perform any additional logic, e.g., mark the user as verified in the database

//       return res.send('Token verified successfully');
//     });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).send('Internal Server Error');
//   }
// });

app.get('/verify', async (req, res) => {
  try {
    const userId = req.query.id;
    await users.updateOne({ _id: userId }, { $set: { status: STATUS.VERIFIED } });
    const currentUser = await users.findOne({ _id: userId })
    console.log({ currentUser })

    if (currentUser) {
      const verificationStatus = currentUser?.status
      const message = getVerificationMessage(verificationStatus);
      return res.send(message);
    } else {
      return res.send(ResponseMessages.INVALID_ACCOUNT_VALIDATION)
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send(ResponseMessages.INTERNAL_SERVER_ERROR);
  }
});

routes.forEach(({ path, func }) => {
  app.use(path, func);
});

// const protectedRoutes = [
//   {
//     path: `${rootEndPoint}/auth/superadmin`,
//     func: [isVerified, superAdminRoutes],
//   },
//   {
//     path: `${rootEndPoint}/auth/admin`,
//     func: [isVerified, adminRoutes],
//   },
//   {
//     path: `${rootEndPoint}/auth/admin/settings`,
//     func: [isVerified, settingsRoutes],
//   },
// ];

// protectedRoutes.forEach(route => {
//   app.get(route.path, route.func);
// });

function getVerificationMessage(verificationStatus: any) {
  switch (verificationStatus) {
    case 'VERIFIED':
      const successMessage = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Email Verification Success</title>
      </head>
      <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
        <h1>Email Verified Successfully!</h1>
        <p>Your email has been successfully verified. You can now log in and access our services.</p>
      </body>
      </html>
    `;
      return successMessage;
    case 'PENDING':
      const failureMessage = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Verification Failed</title>
        </head>
        <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
          <h1>Email Verification Failed</h1>
          <p>Sorry, we couldn't verify your email. Please try again or contact support.</p>
        </body>
        </html>
      `;
      return failureMessage
    default:
      return 'Invalid verification status';
  }
}

// const successMessage = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Email Verification Success</title>
//   </head>
//   <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//     <h1>Email Verified Successfully!</h1>
//     <p>Your email has been successfully verified. You can now log in and access our services.</p>
//   </body>
//   </html>
// `;

// const failureMessage = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Email Verification Failed</title>
//   </head>
//   <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//     <h1>Email Verification Failed</h1>
//     <p>Sorry, we couldn't verify your email. Please try again or contact support.</p>
//   </body>
//   </html>
// `;

// const passwordResetSuccessMessage = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Password Reset Success</title>
//   </head>
//   <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//     <h1>Password Reset Successful!</h1>
//     <p>Your password has been successfully reset. You can now log in with your new password.</p>
//   </body>
//   </html>
// `;

// const passwordResetFailureMessage = `
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Password Reset Failed</title>
//   </head>
//   <body style="font-family: Arial, sans-serif; text-align: center; padding: 20px;">
//     <h1>Password Reset Failed</h1>
//     <p>Sorry, we couldn't reset your password. Please try again or contact support.</p>
//   </body>
//   </html>
// `;













