const OUTPOUT_PATH = './output.txt';
const fs = require('fs');
const primesDictionary = JSON.parse(fs.readFileSync('./primes-map.json'));
const words = fs.readFileSync('./anagram.txt', 'utf8').split('\r\n');

const start = Date.now();

const groups = {};

words.forEach(word => {
  const primeFactorisation = word.toLowerCase().split('').reduce(
    (total, letter) => (primesDictionary[letter] || 1) * total, 1
  );

  groups[primeFactorisation] = groups[primeFactorisation] || [];
  groups[primeFactorisation].push(word);
});

console.log(`Execution time: ${Date.now() - start} ms`);

fs.writeFileSync(OUTPOUT_PATH, JSON.stringify([...Object.values(groups)], null, "  "));

console.log(`Output file: ${OUTPOUT_PATH}`);
