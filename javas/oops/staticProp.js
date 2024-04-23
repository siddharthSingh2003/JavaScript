class User{
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username : ${this.username}`);
    }

    static  createID() {
        return `123`
    }
}

const sid = new User('sidd')
console.log(sid.createID());


class Teacher extends User{
    constructor(username,email) {
        super(username)
        this.email = email
    }
}

const mobile = new Teacher('mobi', 'mobi.com')