const request = require('supertest');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.get('/books', (req, res) => {
  res.json([
    { id: "1", "Pone Nya Khin": "Lat Kyan La Yaung" },
    { id: "2", "Khat Zaw": "The guys from yangon..." },
    { id: "3", "Khat Zaw": "The guys from mandalay" },
    { id: "4", "Tha ka tho Bhone Naing": "Thu Ngal Chin loh bl sat ywae call mye Khaing" },
  ]);
});

describe('GET /books', () => {
  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(4);
    expect(res.body[0]).toHaveProperty("id", "1");
  });
});
