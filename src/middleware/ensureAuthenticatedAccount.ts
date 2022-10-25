import { NextFunction, Request, Response } from "express";
import { firebaseAdmin } from "../database/Firebase-admin";

interface ResponseProps {
  uid: string;
  email?: string;
}

export async function ensureAuthenticatedAccount(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;

  // if token is not present in the request
  if (!authHeader) {
    return res.status(401).json({
      message: "Token missing",
    });
  }

  const [, token] = authHeader.split(" ");

  try {
    await firebaseAdmin
      .auth()
      .verifyIdToken(token)
      .then((payload) => {
        req.uid = payload.uid;
        return next();
      });
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}
