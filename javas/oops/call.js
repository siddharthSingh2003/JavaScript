function SetUserName(username) {
    //complex DB calls
    this.username=username
}

function createUser(username, email, password) {
    SetUserName.call(this,username)

    this.email = email
    this.password = password
}

const user = new createUser("Sid", "sid@y.com", 2345)

console.log(user);