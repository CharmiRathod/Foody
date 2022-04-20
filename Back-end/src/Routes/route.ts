import express, { Request, Response } from 'express';
import { Router } from 'express';

//const router: express.Router = Router();
export const router = express.Router({
    strict: true
});

router.get('/', (req: Request, res: Response) => {
    return res.status(200).json({
        message: "Hello World!"
    });
  
})

export default router;