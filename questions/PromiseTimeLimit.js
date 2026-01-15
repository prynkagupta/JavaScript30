/*
Q.16/30 
2637. Promise Time Limit

Given an asynchronous function fn and a time t in milliseconds, return a new time limited version of the input function. fn takes arguments provided to the time limited function.

The time limited function should follow these rules:

 -If the fn completes within the time limit of t milliseconds, the time limited function should resolve with the result.
 -If the execution of the fn exceeds the time limit, the time limited function should reject with the string "Time Limit Exceeded".
*/
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        const onSuccess = fn(...args)
        const result = new Promise((res, rej)=>{
            setTimeout(()=>{
                rej("Time Limit Exceeded")
            }, t)
        })

        return Promise.race([onSuccess, result])
        
    }
};
