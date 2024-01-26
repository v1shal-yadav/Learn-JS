// (IIFE)  Immediately Invoked Function Expressions 

// named IIFE
// ()() // one is defination and other one is execution

(function chai() { 
    console.log(`DB CONNECTED`);
})(); 
( () => { console.log(`vishal`);} )() // will also work

// un-named IIFE
( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('vishal yadav') 

/**
* again using the IIFE function after chai() sometimes not work because you might have missed the semi-colon(;). 
* chai() has to be revoked after its execution.
* while writing two IIFE in a same file, remember to use(;)
* sometime we face problem due gloabal scope pollution.
* so to remove those pollution/variables we are using IIFE.
 */

