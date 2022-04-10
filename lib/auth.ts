import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "./prisma";

export const validateRoutes = (handler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const { TRAX_ACCESS_TOKEN: token } = req.cookies;

    if (token) {
      let user: User;

      try {
        const { id } = await jwt.verify(token, process.env.JWT_SECRET);
        user = await prisma.user.findUnique({ where: { id } });
        if (!user) {
          throw new Error("Who are YOU?");
        }
      } catch (err) {
        console.error(err);
        return res.status(401).json({ message: "Invalid token" });
      }
      return handler(req, res, user);
    }
    return res.status(401).json({ message: "No token" });
  };
};
