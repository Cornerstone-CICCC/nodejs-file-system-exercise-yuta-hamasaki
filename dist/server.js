"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Check the README.md file for instructions to the exercise
const http_1 = __importDefault(require("http"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const PORT = 3000;
const app = http_1.default.createServer((req, res) => {
    if (req.url === '/view-image') {
        const imagePath = path_1.default.join(__dirname, '/images/veryhappydog.jpg');
        fs_1.default.readFile(imagePath, (error, data) => {
            if (error) {
                console.error("error", error);
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(data);
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
