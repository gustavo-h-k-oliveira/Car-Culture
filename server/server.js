const express = require('express');
const app = express();
const cors = require('cors');
const corsOptions = {
    origin: 'https://legendary-space-waffle-56p64qg5j9737g57-5173.app.github.dev/',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.get('/api', (req, res) => {
    res.json({ fruits: ['apple', 'banana', 'cherry'] });
});

app.listen(8080, () => {
    console.log('Server is running on port 8080');
});
