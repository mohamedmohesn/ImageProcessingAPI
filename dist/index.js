"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./utils/routes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', routes_1.default);
app.use(express_1.default.static('ImageProcessingAPI'));
app.use('/images', express_1.default.static('images'));
const port = 3000;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
