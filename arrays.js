
// basic dsa largest number

// let num = [1,2,3,4,5,6,7,8,9,10,123]
// let largest = 0

// for(let i = 0; i < num.length; i++){
//     if(num[i] > largest){
//         largest = num[i]
//     }
// }
// console.log(largest)

// basic dsa Reverse a array

//  first method built in method 

// let array = [1,2,3,4,5]
// console.log(array.reverse())

// swap method 
// let array = [1,2,3,4,5]

// let start = 0
// let end = array.length-1;

// while(start < end ){
//     let temp = array[start]
//     array[start] = array[end]
//     array[end] = temp

//   start++
//   end--
// }
// console.log(array)


//  using the for loops
// let arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < arr.length / 2; i++) {
//     let temp = arr[i];
//     arr[i] = arr[arr.length - 1 - i];
//     arr[arr.length - 1 - i] = temp;
// }

// console.log(arr);

//  Remove the duplicate numbers from the array

// let array = [2,5,2,8,5]

// let result = [...new Set()];

// console.log(result)

// 2 ps
// let array = [2, 5, 2, 8, 5]

// for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//         if (array[i] === array[j]) {
//             array.splice(j, 1)
//             j--
//         }

//     }
// }
// console.log(array)


//  3
let arr = [2, 5, 2, 8, 5];

let result = [];
let seen = [];

for (let i = 0; i < arr.length; i++) {
    if (!seen.includes(arr[i])) {
        result.push(arr[i]);
        seen.push(arr[i]);
    }
}

console.log(result);
