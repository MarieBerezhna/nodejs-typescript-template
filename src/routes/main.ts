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
  const userDir = `src/users/${req.sessionID}`;
  const uploadsDir = `${userDir}/uploads/`;
  const outputDir = `${userDir}/output/`;

  if (!fs.existsSync(uploadsDir))  res.json({ message: 'convert! - empty' });
  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

  fs.readdir(uploadsDir, (err: any, files: any[]) => { 
    if (err) 
      console.log(err); 
    else { 

      files.forEach(file => { 
        const ext = file.split('.').pop();
        const filename = file.replace(`.${ext}`, '');
        const inputPath = `${uploadsDir}${file}`;
        const outputPath = `${outputDir}${filename}.webp`;

        convert(inputPath, outputPath);
      }) 
    } 
  });

    res.json({ message: 'convert!' });
});




export default mainRoute;