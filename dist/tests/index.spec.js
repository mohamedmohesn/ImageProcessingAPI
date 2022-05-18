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
const routes_1 = __importDefault(require("../utils/routes"));
const resize_1 = __importDefault(require("../utils/resize"));
const supertest_1 = __importDefault(require("supertest"));
const request = (0, supertest_1.default)(routes_1.default);
describe('Testing the endpoint api', function () {
    it('endpoint for main page', function (done) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.get('/');
            expect(response.status).toBe(200);
            done();
        });
    });
    it('endpoint for image processing', function (done) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield request.get('/images?filename=encenadaport&width=300&height=300');
            expect(response.status).toBe(200);
            done();
        });
    });
});
describe('Testing the image processing ', function () {
    it('Testing the resizeimage to retrun error message', () => __awaiter(this, void 0, void 0, function* () {
        const data = yield resize_1.default.resizeimage('feascf', 200, 200);
        expect(data).toEqual('Error: Input file is missing');
    }));
    it('Testing the resizeimage to retrun filename', () => __awaiter(this, void 0, void 0, function* () {
        const data = yield resize_1.default.resizeimage('palmtunnel', 200, 200);
        expect(data).toEqual(`./images/edit/palmtunnel_edit.jpg`);
    }));
});
