// objects literals

const mySym = Symbol("newSym")

const JsUser={
    key:"values",  //key is string
    name:"sid",
    age: 20,
    location: "gotham",
    isLoggedIn: false,
    "full name": "Siddharth Singh",
    [mySym]:"my Sym"
}

console.log(JsUser.isLoggedIn)
console.log(JsUser["full name"])

console.log(typeof mySym);

JsUser.greeting=  function(){
    console.log("Hello")
}

console.log(JsUser.greeting())
console.log(JsUser);