import fs from 'fs';
import path from 'path';

import mathdata from '../../../components/mathdata.ts'


export default async function(req: any, res: any) {

  const index :Integer = req.query.index;

  const retrievedIndex :Integer = await mathdata(index);

  //console.log(retrievedIndex);

  const filePath = path.join(process.cwd(), `/public/images/${retrievedIndex}.mjpeg`);
  //console.log(filePath);


  try {


    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'image/jpeg');

    res.send(imageBuffer);


  } catch (e) {

    res.status(400).json({ error: true, message: 'Image not found' });
    
  }

}
