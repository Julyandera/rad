import { NextApiRequest, NextApiResponse } from "next";
import * as jose from "jose";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const bearer = req.headers["authorization"] as string;

    if (!bearer) {
        return res.status(401).json({ errorMessage: "Unauthorized request." });
    }

    const token = bearer.split(" ")[1];

    if (!token) {
        return res.status(401).json({ errorMessage: "Unauthorized request." });
    }

    const secret = new TextEncoder().encode(process.env.JWT_SECRET);

    try {
        await jose.jwtVerify(token, secret);
    } catch (err) {
        return res.status(401).json({ errorMessage: "Unauthorized request." });
    }

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

    return res.status(200).json({ me: user });
}
