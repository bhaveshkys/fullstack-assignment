const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/cards.json');

const getCards = () => {
    const data = fs.readFileSync(filePath);
    return JSON.parse(data);
};

const saveCards = (cards) => {
    fs.writeFileSync(filePath, JSON.stringify(cards, null, 2));
};

module.exports = {
    getCards,
    saveCards,
};