import { Router } from 'express';
import upload from '../utils/upload';
import fs from 'fs';
import convert from '../utils/convert';

const mainRoute = Router();

mainRoute.get('/', (req:any, res) => {

  console.log(req.sessionID);
    res.send('main api route works');
});

mainRoute.post('/upload', upload.array('files'), (req, res) => {
  // Handle the uploaded file
  res.json({ message: 'File uploaded successfully!' });
});


mainRoute.get('/convert', (req:any, res) => {

  const dir = `src/uploads/${req.sessionID}/`;
  if (!fs.existsSync(dir))  res.json({ message: 'convert! - empty' });

  console.log(dir);

    fs.readdir(dir, (err: any, files: any[]) => { 
      if (err) 
        console.log(err); 
      else { 
        console.log("\nCurrent directory filenames:"); 
        files.forEach(file => { 

          console.log(file); 
          
            const inputPath = `${dir}${file}`;

          convert(inputPath, dir);
          console.log(file); 
        }) 
      } 
    });

    res.json({ message: 'convert!' });
});




export default mainRoute;