"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp_1 = __importDefault(require("../utils/sharp"));
const routes = (0, express_1.default)();
routes.get('/', sharp_1.default.mainEndpoint);
routes.get('/images', sharp_1.default.ImageProcessing);
exports.default = routes;
