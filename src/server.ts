// Import the 'express' module
import express from 'express';
import cors from 'cors';
import routes from './routes';
import bodyParser from 'body-parser';
import session from 'express-session';

const app = express();

const sess = {
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}

if (app.get('env') !== 'develoopment') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))
app.use(cors());
// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/src/users', express.static('src/users'));

// Set the port number for the server
const port = 3000;

app.use((req:any, res, next) => {
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