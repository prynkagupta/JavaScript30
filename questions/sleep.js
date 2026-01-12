/*
Q.13/30 
2621. Sleep
Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
Note that minor deviation from millis in the actual sleep duration is acceptable.
*/
async function sleep(millis) {
    await new Promise((res)=>{
        setTimeout(()=>{
            res()
        }, millis)
    })
    
}
