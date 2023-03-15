const input = 'turpentine and turtles';
const vovels = ['a', 'e', 'i', 'o', 'u']
const resultArray = []
for (let i = 0; i < input.length; i++){
  //console.log('i is ' + i);
  if (input[i] === 'e'){
     resultArray.push(input[i]);
  }
  if (input[i] === 'u'){
     resultArray.push(input[i]);
  }

  for (let j = 0; j < vovels.length; j++){
//console.log('j is ' + j);
if (input[i] === vovels[j]){
  //console.log(input[i])
  resultArray.push(input[i]);
  }
}
}
const resultString = resultArray.join('').toUpperCase();
 console.log(resultString);
