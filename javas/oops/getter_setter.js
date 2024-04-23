class User{
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    //need to use both getter and setter at same time
    get password() {
        return this._password.toUpperCase()
    }

    set password(value) {
        this._password = value
    }

}




const sid = new User("sid@mail .com", '2hyui5')
console.log(sid.password);