//Q-05/30-ApplyTransformOverEachElementinArray.js

// Q.2635. Apply Transform Over Each Element in Array
/*
Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.

The returned array should be created such that returnedArray[i] = fn(arr[i], i).

Please solve it without the built-in Array.map method.
*/

let map = function(arr,fr){
    let newArr = []
    arr.forEach((value,index)=>{
        newArr.push(fn(value,index))
        
    });
    return newArr
};