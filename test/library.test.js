const request = require('supertest');
const { app, startServer } = require('../src/infrastructure/app');
let server;

beforeAll(() => {
    server = startServer();
});

afterAll((done) => {
    server.close(done);
});

describe('GET /library/members', () => {
    it('should return all members', async () => {
        const response = await request(app).get('/library/members');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe('GET /library/books', () => {
    it('should return all books', async () => {
        const response = await request(app).get('/library/books');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body.length).toBeGreaterThan(0);
    });
});

describe('POST /library/borrow', () => {
    it('should create borrow transaction', async () => {
        const newBorrow = { memberCode: 'M004', bookCode: 'SHR-1' };

        const response = await request(app)
            .post('/library/borrow')
            .send(newBorrow)

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Book SHR-1 successfully borrowed by M001.');
    });

    it('should return 400 if book unavailable', async () => {
        const newBorrow = { memberCode: 'M004', bookCode: 'SHR-1' };

        const response = await request(app)
            .post('/library/borrow')
            .send(newBorrow)

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Book is unavailable.');
    });
});

describe('POST /library/return', () => {
    it('should create return transaction', async () => {
        const newReturn = { memberCode: 'M004', bookCode: 'SHR-1' };

        const response = await request(app)
            .post('/library/return')
            .send(newReturn)

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Book SHR-1 successfully returned by M001.');
    });

    it('should return 400 if book unavailable', async () => {
        const newReturn = { memberCode: 'M004', bookCode: 'SHR-1' };

        const response = await request(app)
            .post('/library/return')
            .send(newReturn)

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Invalid return request.');
    });
});