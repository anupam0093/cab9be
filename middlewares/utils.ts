import { ResponseMessages } from "../contants/response";
import { decodeJWT, verifyJWT } from "../services/auth-service";
import { Request, Response, NextFunction } from "express"

export const isAdmin = (req: Request & { user: any }, res: Response, next: NextFunction) => {
  const authToken = req.headers["authorization"]?.split(" ")[1];
  const cookieToken = req?.cookies?.access_token;

  let token;
  if (authToken) {
    token = authToken
  } else {
    token = cookieToken
  }
  console.log("TOKEN", { token })

  if (!token) {
    return res.status(401).json({ message: ResponseMessages.AUTH_TOKEN_NOT_FOUND });
  }
  try {
    const verify = verifyJWT(token);
    console.log({ verify })
    if (!verify) {
      return res.status(401).json({ message: ResponseMessages.AUTH_TOKEN_NOT_FOUND });
    }
    const decoded = decodeJWT(token) as any;
    if (decoded?.user?.role === "admin") {
      req.user = decoded?.user;
      next();
    } else {
      return res.status(401).json({ message: ResponseMessages.AUTH_TOKEN_NOT_FOUND });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};
export const isUser = (req: Request & { user: any }, res: Response, next: NextFunction) => {
  const authToken = req.headers["authorization"]?.split(" ")[1];
  const cookieToken = req?.cookies?.access_token;

  let token;
  if (authToken) {
    token = authToken
  } else {
    token = cookieToken
  }
  console.log("TOKEN", { token })

  if (!token) {
    return res.status(401).json({ message: ResponseMessages.AUTH_TOKEN_NOT_FOUND });
  }
  try {
    const verify = verifyJWT(token);
    console.log({ verify })
    if (!verify) {
      return res.status(401).json({ message: ResponseMessages.AUTH_TOKEN_NOT_FOUND });
    }
    const decoded = decodeJWT(token) as any;
    console.log({ decoded })
    if (decoded?.user?.role === "user") {
      req.user = decoded?.user;
      next();
    } else {
      return res.status(401).json({ message: ResponseMessages.AUTH_TOKEN_NOT_FOUND });
    }
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};


export const isVerified = (role: any) => (req: Request & { user: any }, res: Response, next: NextFunction) => {
  const authToken = req.headers["authorization"]?.split(" ")[1];
  const cookieToken = req?.cookies?.access_token;

  let token;
  if (authToken) {
    token = authToken
  } else {
    token = cookieToken
  }
  console.log("TOKEN", { token })
  if (!token) {
    return res.status(401).json({ success: false, message: ResponseMessages.AUTH_TOKEN_NOT_FOUND });
  }

  const verify = verifyJWT(token);
  console.log({ verify })
  if (!verify) {
    return res.status(401).json({ success: false, message: ResponseMessages.ACCESS_DENIED });
  }
  const decoded = decodeJWT(token) as any;
  console.log({ decoded })
  !role.includes(decoded?.user?.role)
    ? res.status(401).json({ success: false, message: ResponseMessages.ACCESS_DENIED })
    : next();
  req.user = decoded?.user
};