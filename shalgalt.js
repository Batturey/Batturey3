function removeDuplicates(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


function sumOfArray(arr) {
    let sum = 0; 
    for (let num of arr){
        sum += num;
    }
    return sum
}
console.log(sumOfArray([1, 2, 3, 4, 5]));

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

function mergedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while( i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]){
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    while(i < arr2.length) {
        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    return merged;
}
console.log(mergedArrays([1, 3, 5], [2, 4, 6]));