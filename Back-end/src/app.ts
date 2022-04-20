import express,{Request, Response} from 'express';
import dotenv from 'dotenv';
import Routes from './Routes/route';
dotenv.config();

const router = new Routes().router
class app {

    public app: express.Application = express();

    constructor() {
        this.routes();
        this.connection();
    }

    private middleWare(): void {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false}))
    }

    private routes(): void {
        this.app.use('/', router)
    }

    private connection(): void {
        this.app.listen(process.env.PORT, () => {
        console.log(`server is listening to this ${process.env.PORT}`); 
        })
    }
}

export default new app().app;







// const app: express.Application = express();
// app.use(express.json());

// app.use('/', router);


// app.listen(process.env.PORT ,() => {
//     console.log(`server is listening to ${process.env.PORT}`);
// })