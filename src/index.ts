import express from 'express';
import dotenv from 'dotenv';
import routes from './utils/routes';

dotenv.config();

const app = express();
app.use(express.json());
app.use('/', routes);
app.use(express.static('ImageProcessingAPI'));
app.use('/images', express.static('images'));

const port = 3000;

app.listen(port, (): void => {
    console.log(`server started at http://localhost:${port}`);
});
