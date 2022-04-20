import express,{Request, Response} from 'express';
import dotenv from 'dotenv';
import router from './Routes/route';
dotenv.config();

//console.log("Hello World");

const app: express.Application = express();
app.use(express.json());

app.use('/', router);

app.listen(process.env.PORT ,() => {
    console.log(`server is listening to ${process.env.PORT}`);
})