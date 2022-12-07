import fs from 'fs';
import path from 'path';

export default function(req, res) {

  const id = req.query.id;
  const filePath = path.join(process.cwd(), `/public/images/${id}.gif`);
  console.log(filePath);

  try {
    const imageBuffer = fs.readFileSync(filePath);

    // < CONTENT TYPE OF GIF FILE >
    // https://tech.stmn.co.jp/entry/2021/03/15/183722
    res.setHeader('Content-Type', 'image/gif');

    res.send(imageBuffer);

  } catch (e) {

    res.status(400).json({ error: true, message: 'Image not found' });
    
  }

}
