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
console.log(JsUser);
console.log(typeof mySym);