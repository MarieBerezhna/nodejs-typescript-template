// Import the 'express' module
import express from 'express';
import cors from 'cors';
import routes from './routes';

// Create an Express application
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Set the port number for the server
const port = 3000;

// Define a route for the root path ('/')
app.get('/', routes);

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});