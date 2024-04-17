let myName = "Siddharth                "



String.prototype.trueLength = function () {
    console.log(`${this}`)
    console.log((`True length is ${this.trim().length}`));
}

myName.trueLength()

let Heroes = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    
    geySpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.sid = function () {
    console.log(('all in one'));
}

Array.prototype.newSid = function () {
    console.log((`nevere run`));
}

// heroPower.sid()
// Heroes.sid()
// heroPower.newSid()


// Inheretance

const teacher = {
    makeVideo: true
}

const TEachingSupport = {
    isAvilable :false
}

const TASupport = {
    makeAssignment: "yes",
    fulltime: true,
    __proto__:TEachingSupport
}


//modern syntan

Object.setPrototypeOf(TEachingSupport, teacher)