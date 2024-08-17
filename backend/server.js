const express = require('express');
const { v4: uuidv4 } = require('uuid');
const { getCards, saveCards } = require('./models/Cards');
const cors = require('cors');
const app = express();
app.use(express.json()); 
const PORT = process.env.PORT || 3001;

app.use(cors());

app.get('/ping', (req, res) => {
    res.send('Server is running');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.post('/cards', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const cards = getCards();
    const newCard = { id: uuidv4(), title, description };
    cards.push(newCard);
    saveCards(cards);

    res.status(201).json(newCard);
});

app.get('/cards', (req, res) => {
    const cards = getCards();
    res.status(200).json(cards);
});

app.get('/cards/:title', (req, res) => {
    const searchTerm = req.params.title.toLowerCase();
    const cards = getCards();

    
    const filteredAndSortedCards = cards
      .filter(card => card.title.toLowerCase().includes(searchTerm))
      .sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();


        const aStartsWith = aTitle.startsWith(searchTerm);
        const bStartsWith = bTitle.startsWith(searchTerm);

        if (aStartsWith && !bStartsWith) return -1;
        if (!aStartsWith && bStartsWith) return 1;

        
        return aTitle.localeCompare(bTitle);
      });

    if (filteredAndSortedCards.length === 0) {
        return res.status(404).json({ error: 'No cards found' });
    }

    res.status(200).json(filteredAndSortedCards);
});
