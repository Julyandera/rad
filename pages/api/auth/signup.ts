import { NextApiRequest, NextApiResponse } from "next";
import validator from "validator";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";

const prisma = new PrismaClient();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { firstName, lastName, email, password } = req.body;
        const errors: String[] = [];

        const validationSchema = [
            {
                valid: validator.isLength(firstName, {
                    min: 1,
                }),
                errorMessage: "Please enter your first name.",
            },
            {
                valid: validator.isLength(lastName, {
                    min: 1,
                }),
                errorMessage: "Please enter your last name.",
            },
            {
                valid: validator.isEmail(email),
                errorMessage: "Please enter your valid email address.",
            },
            {
                valid: validator.isStrongPassword(password),
                errorMessage:
                    "Your password not strong enough, try to add some special characters or number.",
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

        if (userEmail) {
            return res.status(400).json({
                errorMessage:
                    "You already have account with this email. Please Signin.",
            });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: {
                first_name: firstName,
                last_name: lastName,
                email: email,
                password: hashPassword,
            },
        });

        const alg = "HS256";
        const secret = new TextEncoder().encode(process.env.JWT_SECRET);

        const token = await new jose.SignJWT({ email: user.email })
            .setProtectedHeader({ alg })
            .setExpirationTime("24h")
            .sign(secret);

        res.status(200).json({ user });
    }

    return res.status(404).json({ message: "Unknown Endpoint!" });
}
