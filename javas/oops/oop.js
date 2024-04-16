const user = {
    username: "Sid",
    loginCount: 8,
    singgnedIn: true,
    
    getUserDetails: function () {
        //console.log("got dertails")
        // console.log(`Username : ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

const promiseOne = new Promise()
const date = new Date()