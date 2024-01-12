// Immediatly Invoked Function Expression (IIFE's)

(function iffe() {
    console.log("Connected");

})(); //semicolon is needed to stop the code and execute next code

((name) => {
    console.log(`DB ${name}`)
})("sid")