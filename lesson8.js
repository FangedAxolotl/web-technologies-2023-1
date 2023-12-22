// 1

function pickPropArray(array, name) {
    let result = [];
    array.forEach(obj => {
        if(obj.hasOwnProperty(name)) {
            result.push(obj[name])
        }
    });
    return result;
}

const students = [
    { name: 'Павел', age: 20 },
    { name: 'Иван', age: 20 },
    { name: 'Эдем', age: 20 },
    { name: 'Денис', age: 20 },
    { name: 'Виктория', age: 20 },
    { age: 40 },
 ]
 
 const result = pickPropArray(students, 'name')
 
 console.log(result) 
 // [ 'Павел', 'Иван', 'Эдем', 'Денис', 'Виктория' ]
 

 function createCounter() {
    let count = 0;
    return function () {
      count++;
      console.log(count);
    }
  }

  const counter1 = createCounter()
  counter1() // 1
  counter1() // 2
  
  const counter2 = createCounter()
  counter2() // 1
  counter2() // 2
  
  //3
  function spinWords(text) {
    words = text.split(' ');
    result = [];
    words.forEach(word => {
        if(word.length >= 5) {
            result.push([...word].reverse().join(''));
        }
        else {
            result.push(word);
        }
    });
    return result.join(' ');
  }

const result1 = spinWords( "Привет от Legacy" )
console.log(result1) // тевирП от ycageL

const result2 = spinWords( "This is a test" )
console.log(result2) // This is a test