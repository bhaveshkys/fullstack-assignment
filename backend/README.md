
## Overview

This is a simple Node.js and Express.js backend for managing "Help Center" cards. The backend includes endpoints to create, read, and search for cards. Data is stored in a JSON file for simplicity, but instructions for switching to a PostgreSQL database are also provided.

## Getting Started

### Prerequisites

- Node.js (version 14 or later recommended)
- npm (Node Package Manager)

### Install Dependencies

Navigate to the backend directory and install the required npm packages:
`
cd backend
npm install
`

### Running the Server 
`
node server.js
`

## API Endpoints

/ping - check it the server is running
Post /cards  takes in raw json body consisting of title and description . if sucessfully added gives back response
`{
  "id": "unique-id",
  "title": "Card Title",
  "description": "Card Description"
}`

GET /cards: Retrieve all cards.

GET /cards/:title: Search for cards by title.

## Data Storage
By default, card data is stored in a JSON file located at ./data/cards.json. For a more robust solution, you can switch to PostgreSQL. Instructions are provided in the models/cards.js file.