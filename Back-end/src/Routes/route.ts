import express, { Request, Response, Router } from 'express';

class Routes {
    
public router: express.Router;

constructor() {
    this.router = express.Router();
    this.root();
    this.registration();
}

private root() {
    this.router.get('/', (req: Request, res: Response) => {
            res.send(`<h1> Hello Foodies, Welcome to FOODY!!!!! </h1>`);
})
}

private registration() {
    this.router.route('/registration').post((req: Request, res: Response) => {
        res.send(`<h1> Regitration Page </h1>`);
    })
}

private login() {
    this.router.route('/Login').post((req: Request, res: Response) => {
        res.send(`<h1> Login Page </h1>`);
    })
}
}

export default Routes;



















// export const router = express.Router({
//     strict: true
// });

// router.get('/', (req: Request, res: Response) => {
//     return res.status(200).json({
//         message: "Hello World!....."
//     });
  
// })

// router.get('/', (req: Request, res: Response) => {
//     return res.status(200).json({
//         message: "Hello World!....."
//     });
  
// })
// export default router;