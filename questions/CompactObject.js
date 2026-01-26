/*
Q.29/30 
2705. Compact Object

Given an object or array obj, return a compact object.

A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.
*/
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj){
    if(Array.isArray(obj)){
        let result = [];
        for (let element of obj){
            if(element){
                if(typeof element == 'object'|| Array.isArray(element)){
                    result.push(compactObject(element));
                }else{
                    result.push(element);
                }
            }
        }
        return result;
    } else{
        let result = {};

        for(let key in obj){
            if(obj[key]){
                if(typeof obj[key]=='object'|| Array.isArray(obj[key])){
                    result[key] = compactObject(obj[key]);
                } else {
                    result[key] = obj[key];
                }
            }
        }
        return result;
    }
}