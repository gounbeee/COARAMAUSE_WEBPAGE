import path from 'path';
import { promises as fs } from 'fs';



export default async function(ind :Integer) :Integer {



	const jsonDirectory = path.join(process.cwd(), 'json');

  	//Read the json data file data.json
  	const fileContents = await fs.readFile(jsonDirectory + '/currentMath.json', 'utf8');


  	const jsonObj = JSON.parse(fileContents);
  	const filtered = jsonObj[ind];

	return jsonObj[ind].currentMath;

}