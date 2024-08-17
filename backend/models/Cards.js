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

/**
 * I have used json file as a database for simple demonstration without the need for setting up Database 
 * But if one wants to setup postgres then heres how it is
 * 
 * 1. npm install pg
 * 2. Set up a PostgreSQL database and create a table to store your card data.
 * 3. Replace the `getCards` function with a function that queries the database:
 *    const { Pool } = require('pg');
 *    const pool = new Pool({ connectionString: 'your_database_url' });
 *    
 *    const getCards = async () => {
 *        const res = await pool.query('SELECT * FROM cards');
 *        return res.rows;
 *    };
 * 
 * 4. const saveCard = async (card) => {
 *        const res = await pool.query('INSERT INTO cards (title, description) VALUES ($1, $2)', [card.title, card.description]);
 *    };
 * 
 * 5. Update your application to use async/await when interacting with these functions.
 */
