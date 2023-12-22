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

//4
function indexCulc(nums, target){
    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j++) {
            if(i === j) { 
                continue;
            }
            if(nums[i] + nums[j] === target) { 
                return [i, j];
            }
        }
    }
    return []
}

const nums = [2, 7, 11, 15]
console.log(indexCulc(nums, 9))


// 5

function getLongestPrefix(words) {
    let longestPrefix = "";
    for(let i = 0; i < words[0].length; i++) {
        let prefix = words[0][i];
        for(let j = i + 1; j < words[0].length; j++) {
            prefix += words[0][j];
            if (words.every(word => word.includes(prefix)) &&
                prefix.length > longestPrefix.length &&
                prefix.length >= 2) {
                longestPrefix = prefix;
            }
        }
    }
    return longestPrefix;
}

test1 = ["цветок","поток","хлопок"];

console.log(getLongestPrefix(test1));
