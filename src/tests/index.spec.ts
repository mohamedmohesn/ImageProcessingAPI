import routes from '../utils/routes';
import resize from '../utils/resize';
import supertest from 'supertest';

const request = supertest(routes);
describe('Testing the endpoint api', function (): void {
    it('endpoint for main page', async function (done) {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
    });
    it('endpoint for image processing', async function (done) {
        const response = await request.get(
            '/images?filename=encenadaport&width=300&height=300'
        );
        expect(response.status).toBe(200);
        done();
    });
});
describe('Testing the image processing ', function (): void {
    it('Testing the resizeimage to retrun error message', async () => {
        const data = await resize.resizeimage('feascf', 200, 200);
        expect(data).toEqual('Error: Input file is missing');
    });
    it('Testing the resizeimage to retrun filename', async () => {
        const data = await resize.resizeimage('palmtunnel', 200, 200);
        expect(data).toEqual(`./images/edit/palmtunnel_edit.jpg`);
    });
});
