/*
Q.21/30 
2677. Chunk Array

Given an array arr and a chunk size size, return a chunked array.

A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

Please solve it without using lodash's _.chunk function.
*/

var chunk = function(arr, size) {
    const result = []

    while(arr.length > 0){
        result.push(arr.splice(0, size))
    }

    return result
    
};