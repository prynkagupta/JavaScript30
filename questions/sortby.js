/*
Q.24/30 
2724. Sort By

Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

You may assume that fn will never duplicate numbers for a given array.
*/

var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b)=> fn(a) - fn(b))    
};