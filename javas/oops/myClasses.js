// ES6

class User {
    constructor(UserName, email, password) {
        this.UserName = UserName;
        this.email = email;
        this.password = password;
        
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    changeUsename() {
        return `${this.UserName.toUpperCase()}`
    }
}

const Sid = new User("Sid", "sid@MediaList.com", "234")

console.log(Sid.encryptPassword())
console.log(Sid.changeUsename())

//behind the scene

function