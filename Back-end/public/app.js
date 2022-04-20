"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const route_1 = __importDefault(require("./Routes/route"));
dotenv_1.default.config();
const router = new route_1.default().router;
class app {
    constructor() {
        this.app = (0, express_1.default)();
        this.routes();
        this.connection();
    }
    middleWare() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', router);
    }
    connection() {
        this.app.listen(process.env.PORT, () => {
            console.log(`server is listening to this ${process.env.PORT}`);
        });
    }
}
exports.default = new app().app;
// const app: express.Application = express();
// app.use(express.json());
// app.use('/', router);
// app.listen(process.env.PORT ,() => {
//     console.log(`server is listening to ${process.env.PORT}`);
// })
