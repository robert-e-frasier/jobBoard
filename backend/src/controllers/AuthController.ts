import { Request, Response } from "express";
import * as AuthService from "../services/AuthService.js";

export async function login(req: Request, res: Response){
    const { email, password } = req.body;

    const user = await AuthService.login(email, password);

    if (user === null){
        return res.json("Wrong Username or Password")
    }

    return res.json("Loggin In")
}