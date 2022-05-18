import express from 'express';
import sharps from '../utils/sharp';

const routes = express();

routes.get('/', sharps.mainEndpoint);
routes.get('/images', sharps.ImageProcessing);

export default routes;
