"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resize_1 = __importDefault(require("./resize"));
const node_cache_1 = __importDefault(require("node-cache"));
const fs_1 = require("fs");
const cache = new node_cache_1.default();
const mainEndpoint = (req, res) => {
    res.send('Image Processing API you need enter filename,width,height like (filename=encenadaport&width=900&height=500)');
};
// function of endpoint to ImageProcessing and cached
const ImageProcessing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const widths = req.query.width;
    const heights = req.query.height;
    const filename = req.query.filename;
    const width = parseInt(widths);
    const height = parseInt(heights);
    if (!widths || !heights || !filename) {
        res.send('width or filename or height is missing');
    }
    else {
        if (width <= 0 || height <= 0) {
            res.send('width or height or both is 0 or less');
        }
    }
    try {
        // to serve the cache
        if (cache.has(`image${filename}${width}${height}`)) {
            res.send(cache.get(`image${filename}${width}${height}`));
        }
        else {
            // callback of resizeimage
            yield resize_1.default.resizeimage(filename, width, height);
            (0, fs_1.readFile)(`./images/edit/${filename}_edit.jpg`, (err, data) => {
                if (err) {
                    res.send('an image does not exist');
                }
                else {
                    res.set('Content-Type', `${filename}_edit.jpg`);
                    cache.set(`image${filename}${width}${height}`, `<img src="/images/edit/${filename}_edit.jpg" alt="${filename}_edit">`, 300);
                    res.send(data);
                }
            });
        }
        // hit error
    }
    catch (error) {
        res.send('width or height or both is not number');
    }
});
exports.default = { mainEndpoint, ImageProcessing };
