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
