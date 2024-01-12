const user = { 
    username: 'siddharth',
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.username} , welocme to website`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "sid"
user.welcomeMessage()     

const arrow= () => {
    let username = "sid"
    console.log(this)  // does not work

}


// arrow function
// if in curly braces return is must
//explicet return 
const addTow = (num1, num2) => {
    return num1+num2
}

//user in react
// retrun not required
//implicit return 
const Two = (num1, num2) => num1 + num2

// console.log(Two(3,4))

