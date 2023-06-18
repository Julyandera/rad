import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const bearer = req.headers["authorization"] as string;
    const token = bearer.split(" ")[1];

    const payload = jwt.decode(token) as { email: string };

    if (!payload.email) {
        return res.status(401).json({ errorMessage: "Unauthorized request." });
    }

    const user = await prisma.user.findUnique({
        where: { email: payload.email },
        select: {
            id: true,
            first_name: true,
            last_name: true,
            email: true,
        },
    });

    if (!user) {
        return res.status(401).json({ errorMessage: "User not found." });
    }

    return res.status(200).json({
        id: user.id,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
    });
}
