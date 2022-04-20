"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Routes {
    constructor() {
        this.router = express_1.default.Router();
        this.root();
        this.registration();
    }
    root() {
        this.router.get('/', (req, res) => {
            res.send(`<h1> Hello Foodies, Welcome to FOODY!!!!! </h1>`);
        });
    }
    registration() {
        this.router.route('/registration').post((req, res) => {
            res.send(`<h1> Regitration Page </h1>`);
        });
    }
    login() {
        this.router.route('/Login').post((req, res) => {
            res.send(`<h1> Login Page </h1>`);
        });
    }
}
exports.default = Routes;
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
