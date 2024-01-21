class User {
    constructor(username) {
        this.username = username
    }
    logMe() {
        console.log(`Username: ${this.username}`);
    }
    
    static kcreateId() {
        return `123`
    }
}
const vishal = new User("vishal")
console.log(vishal.createId()) // can't access becuase of static 

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}
const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
iphone.createId()// child also can't access because of static