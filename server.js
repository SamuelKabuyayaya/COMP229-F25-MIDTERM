/**
 * Midterm API Project - COMP229
 *
 * Challenge: Implement the API logic for managing a collection of video games!
 *
 * Here's the setup:
 * A server is already running on port 3000 with an array of game objects.
 * Your mission is to implement the missing logic for each of the endpoints below.
 *
 * Endpoints:
 * 1. GET /api/games       - Retrieve the full list of games.
 * 2. GET /api/games/filter?genre=[genre name] - Retrieve games by genre match.
 * 3. GET /api/games/:id   - Retrieve a game by its index.
 * 4. POST /api/games      - Add a new game to the library.
 * 5. PUT /api/games/:id   - Update a game by its index.
 * 6. DELETE /api/games/:id - Remove a game from the library by its index.
 *
 * The array of games is already defined for you, but you need to bring the logic
 * to life. Test your work using tools like Postman, Thunder Client, or Insomnia.
 *
 * Submission Requirements:
 * 1. Screenshots: Provide one per endpoint, showing the request details and a
 *    successful response with the correct status code.
 * 2. Code Submission: Zip your project, share the repo link, and ensure your
 *    personalized games are present.
 *
 * Good luck, and may your code be bug-free!
 */

const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

// Serve static files (e.g., images, CSS) from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Array of game objects
let games = [
  { title: 'The Legend of Zelda: Breath of the Wild', genre: 'Adventure', platform: 'Nintendo Switch', year: 2017, developer: 'Nintendo' },
  { title: 'God of War', genre: 'Action', platform: 'PlayStation 4', year: 2018, developer: 'Santa Monica Studio' },
  { title: 'Hollow Knight', genre: 'Metroidvania', platform: 'PC', year: 2017, developer: 'Team Cherry' },
  { title: 'Forza Horizon 5', genre: 'Racing', platform: 'Xbox Series X|S', year: 2021, developer: 'Playground Games' },
  { title: 'Stardew Valley', genre: 'Simulation', platform: 'Nintendo Switch', year: 2016, developer: 'ConcernedApe' }
];

// Set the port for the server
const PORT = 3000;

// Serve the instructions HTML file (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

// API Endpoints

// GET /api/games
// Description: Get all games
// Task: Implement logic to return the full list of games
app.get('/api/games', (req, res) => {
  // TODO: Add logic to return all games
  res.status(200).json(games);

  // Don't forget to remove the line below:
  // Samuel K: Ok I did it.
});

// GET /api/games/filter?genre=[genre name]
// Description: Filter games by genre
// Task: Implement logic to return games matching the specified genre
app.get('/api/games/filter', (req, res) => {
  // TODO: Add logic to filter games by genre
  
  const genre = req.query.genre;
  const filteredGames = games.filter(game => game.genre === genre);
  res.status(200).json(filteredGames);

  // Don't forget to remove the line below:
  // Samuel K: Ok I did it again. Had some issues with the filter logic.
});

// GET /api/games/:id
// Description: Get a specific game by ID
// Task: Implement logic to return a game by its index (ID)
app.get('/api/games/:id', (req, res) => {
  // TODO: Add logic to return a game by its index (ID)
  
  const id = parseInt(req.params.id);
  res.status(200).json(games[id]);

  // Don't forget to remove the line below:
  // Samuel K: Ok I did it again. I tried to use findById logic that was shown a few classes back but it didn't work for me. Thats why i had to use parseInt in order to make it all work.
});

// POST /api/games
// Description: Add a new game
// Task: Implement logic to add a new game to the array
app.post('/api/games', (req, res) => {
  // TODO: Add logic to add a new game to the array
  
  const newGame = req.body;
  games.push(newGame);
  res.status(201).json({message: "New game was created succesfully", game: newGame})

  // Don't forget to remove the line below:
  //Samuel K: almost forgot to delete that lol.
});

// PUT /api/games/:id
// Description: Update a game by ID
// Task: Implement logic to update a game by its index (ID)
app.put('/api/games/:id', (req, res) => {
  // TODO: Add logic to update a game by its index
  
  const id = parseInt(req.params.id);
  const updatedGame = {...games[id], ...req.body};
  games[id] = updatedGame;

  res.status(201).json({message: "Game information was updated sucessfully", game: updatedGame})

  // Don't forget to remove the line below:
  //Samuel K: Deleted.
});

// DELETE /api/games/:id
// Description: Remove a game by ID
// Task: Implement logic to remove a game by its index (ID)
app.delete('/api/games/:id', (req, res) => {
  // TODO: Add logic to remove a game by its index
  
  // ***************************************************************
  // ***************************************************************
  // ***************  Implement your code here  ********************
  // ***************************************************************
  // ***************************************************************

  // Don't forget to remove the line below:
  res.status(501).send('Not Implemented');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
