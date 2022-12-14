import fs from 'fs';
import path from 'path';

import mathdata from '../../../components/mathdata'


export default async function(req: any, res: any) {

  const index = req.query.index;

  const retrievedIndex = await mathdata(index);

  //console.log(retrievedIndex);

  const filePath = path.join(process.cwd(), `/public/images/${retrievedIndex}.gif`);
  //console.log(filePath);
  var stats = fs.statSync(filePath);
  var fileSizeInBytes = stats.size;



  try {


    const imageBuffer = fs.readFileSync(filePath);

    res.setHeader('Content-Type', 'image/gif');
    res.setHeader('Content-Length', fileSizeInBytes);

    res.send(imageBuffer);


  } catch (e) {

    res.status(400).json({ error: true, message: 'Image not found' });
    
  }

}
