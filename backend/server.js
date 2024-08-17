const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { getCards, saveCards } = require('./models/Cards');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});