/*
Q.26/30 
2625. Flatten Deeply Nested Array

Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

Please solve it without the built-in Array.flat method.
*/
var flat = function (arr, n) {
    if(n===0){
        return arr
    }else{
        const output = []
        arr.forEach((ele)=>{
            if(Array.isArray(ele)){
                output.push(...flat(ele, n-1))
            }else{
                output.push(ele)
            }
        })
        return output
    }
    
};