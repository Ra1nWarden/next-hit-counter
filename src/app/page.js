import React from 'react';

import {
  readFile,
  writeFile,
} from '../helpers/file-helpers';
import { NumberButton } from './NumberButton';

const DATABASE_PATH = '/src/database.json';

/*
`readFile` takes 1 argument:
• the path to the file:

readFile('/path/to/file');

`writeFile` takes 2 arguments:
• The path to the file
• The new contents for the file

writeFile(
  '/path/to/file',
  '{ "hello": "world" }'
);
*/

function Home() {
  const file = readFile(DATABASE_PATH);
  const json = JSON.parse(file);
  const num = json.hits;
  json.hits = num + 1;
  writeFile(DATABASE_PATH, JSON.stringify(json));
  return (
    <main>
      <h1>Welcome!</h1>
      <p>You are visitor number </p>
      <NumberButton num={num} />
    </main>
  );
}

export default Home;
