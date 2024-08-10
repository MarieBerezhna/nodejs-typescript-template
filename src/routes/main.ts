import { Router } from 'express';
import upload from '../utils/upload';

const mainRoute = Router();

mainRoute.get('/', (req, res) => {
    res.send('main api route works');
});

mainRoute.post('/upload', upload.single('file'), (req, res) => {
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});

  export default mainRoute;