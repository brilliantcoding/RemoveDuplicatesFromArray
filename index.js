const R = require('ramda');
let input = [
  { firstname: 'first1', lastname: 'last1', birthDate: 1 },
  { firstname: 'first1', lastname: 'last1', birthDate: 1 },
  { firstname: 'first2', lastname: 'last2', birthDate: 2 },
];
// const strEq = R.eqProps(String);
// console.log('output: ', R.uniqWith(R.eqProps, input));
const data = Array.from(new Set(input.map(JSON.stringify))).map(JSON.parse);
console.log(data);
