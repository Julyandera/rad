import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function (req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        const errors: string[] = [];

        const validationSchema = [
            {
                valid: validator.isEmail(email),
                errorMessage: "Email or Password is invalid.",
            },
            {
                valid: validator.isLength(password, { min: 1 }),
                errorMessage: "Email or Password is invalid.",
            },
        ];

        validationSchema.forEach((check) => {
            if (!check.valid) {
                errors.push(check.errorMessage);
            }
        });

        if (errors.length) {
            return res.status(400).json({ errorMessage: errors[0] });
        }

        const userEmail = await prisma.user.findUnique({
            where: { email },
        });

        if (!userEmail) {
            return res
                .status(401)
                .json({ errorMessage: "Email or Password is invalid." });
        }

        const passwordMatch = await bcrypt.compare(
            password,
            userEmail.password
        );

        if (!passwordMatch) {
            return res
                .status(401)
                .json({ errorMessage: "Email or Password is invalid." });
        }

        const alg = "HS256";
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const token = await new jose.SignJWT({ email: userEmail.email })
            .setProtectedHeader({ alg })
            .setExpirationTime("24h")
            .sign(secret);

        return res.status(200).json({ token });
    }

    return res.status(404).json({ message: "Unknown Endpoint!" });
}