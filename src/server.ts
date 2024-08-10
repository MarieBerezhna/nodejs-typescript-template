// Import the 'express' module
import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/src/uploads', express.static('uploads'));

// Set the port number for the server
const port = 3000;

app.use((req, res, next) => {
  next()
})

app.use('/', routes);

app.get("/:universalURL", (req, res) => {
  res.send("404 URL NOT FOUND");
});

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message when the server is successfully running
  console.log(`Server is running on http://localhost:${port}`);
});