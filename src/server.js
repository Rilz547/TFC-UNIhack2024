const express = require('express');
const fs = require('fs');

const app = express();
const port = 3001;

app.use(express.json());

app.get('/reviews', (req, res) => {
    fs.readFile('reviews.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        res.json(JSON.parse(data));
    });
});

app.post('/reviews', (req, res) => {
    fs.readFile('reviews.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }

        const reviews = JSON.parse(data);
        const newReview = req.body;
        reviews.push(newReview);

        fs.writeFile('reviews.json', JSON.stringify(reviews, null, 2), (err) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
                return;
            }

            res.status(201).json({ message: 'Review added successfully' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});