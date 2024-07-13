// Import the 'express' module
import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';
// Create an Express application
const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Set the port number for the server
const port = 3000;

app.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})
// Define a route for the root path ('/')
app.use('/', routes);

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});