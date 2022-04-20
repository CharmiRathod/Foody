"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const route_1 = __importDefault(require("./Routes/route"));
dotenv_1.default.config();
//console.log("Hello World");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', route_1.default);
app.listen(process.env.PORT, () => {
    console.log(`server is listening to ${process.env.PORT}`);
});
