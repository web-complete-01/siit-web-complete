console.log('Array min');

// Read the array elem
let arrSize = prompt(`Input the number of elements`);
arrSize = Number(arrSize);

const arr = [];
for(let i = 0; i < arrSize; i++){
    arr[i] = prompt(`Input element ${i +  1}`);
    arr[i] = Number(arr[i]);
}

console.log(arr);

let min = arr[0];
for (let i = 1; i < arr.length; i++) {
    if(min > arr[i]){
        min = arr[i];
    }
}

alert(`The min value is: ${min}`);