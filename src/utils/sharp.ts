import resize from './resize';
import { Request, Response } from 'express';
import nodeCache from 'node-cache';
import { readFile } from 'fs';

const cache = new nodeCache();

const mainEndpoint = (req: Request, res: Response): void => {
    res.send(
        'Image Processing API you need enter filename,width,height like (filename=encenadaport&width=900&height=500)'
    );
};
// function of endpoint to ImageProcessing and cached
const ImageProcessing = async (req: Request, res: Response): Promise<void> => {
    const widths = req.query.width as unknown as string;
    const heights = req.query.height as unknown as string;
    const filename = req.query.filename as unknown as string;
    const width = parseInt(widths);
    const height = parseInt(heights);

    if (!widths || !heights || !filename) {
        res.send('width or filename or height is missing');
    } else {
        if (width <= 0 || height <= 0) {
            res.send('width or height or both is 0 or less');
        }
    }

    try {
        // to serve the cache
        if (cache.has(`image${filename}${width}${height}`)) {
            res.send(cache.get(`image${filename}${width}${height}`));
        } else {
            // callback of resizeimage
            await resize.resizeimage(filename, width, height);

            readFile(`./images/edit/${filename}_edit.jpg`, (err, data) => {
                if (err) {
                    res.send('an image does not exist');
                } else {
                    res.set('Content-Type', `${filename}_edit.jpg`);
                    cache.set(
                        `image${filename}${width}${height}`,
                        `<img src="/images/edit/${filename}_edit.jpg" alt="${filename}_edit">`,
                        300
                    );
                    res.send(data);
                }
            });
        }
        // hit error
    } catch (error) {
        res.send('width or height or both is not number');
    }
};

export default { mainEndpoint, ImageProcessing };
