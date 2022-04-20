import express, {Request, Response} from "express";
import User from "../models/user";

class Registration {

    public static registration = async(req: Request, res: Response) => {

        try {
            const {email, name, password} = req.body;

            const doc  = new User({
                name: name,
                email: email,
                password: password
            });
        
        } catch (error) {
            console.log(error);
            
        }

    }

}