export const CAPITALIZED=(text, callback)=>{
    const capitalized = text.toUpperCase();
    CHECK(typeof text !== 'string',()=>{
        console.log("Input must be a string");
    });
    CONDITION(typeof callback === 'function',()=>{
        callback(capitalized);
    },()=>{
        console.log("Callback is not a function");
    });
};