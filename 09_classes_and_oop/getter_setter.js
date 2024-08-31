class User {
    constructor(email, password) {
        this.email = email; 
        this.password = password
    }

    get password() {
        return `${this._password}vishal`
    }

    set password(value) {
        this._password = value
    }
 
    get email() {
        return this._email.toUpperCase()
    }
    set email(value) {
        this._email = value
    }
}

const vishal = new User ("vishal@ai.com", "123")
console.log(vishal.password);