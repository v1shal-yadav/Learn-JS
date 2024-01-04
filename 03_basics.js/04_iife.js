// Immediately Invoked Function Expressions (IIFE) 

// named IIFE
(function chai() { 
    console.log(`DB CONNECTED`);
})(); // again using the IIFE function after chai() sometimes not work because you might have missed the semi-colon(;). 
// chai() has to be revoked after its execution.
// while writing two IIFE in a same file, remember to use(;)

// ( () => { console.log(`vishal`);} )() // will also work

// ()() // one is defination and other one is execution

// sometime we face problem due gloabal scope pollution.
// so to remove those pollution/variables we are using IIFE.
// unnamed IIFE
( (name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('vishal yadav')

