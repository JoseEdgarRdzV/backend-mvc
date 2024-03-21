const bcrypt = require('bcrypt')
const firebase = require('./../config/firebase')
const IUser = require('./../interfaces/user.interface')

class User extends IUser {
    constructor(email, password) {
        super()
        this.email = email
        this.password = password
    }

    static async createUser (email, password) {
        //codigo para crear usuario
    }

    static async findByEmail (email) {
        //codigo para buscar por correoñ
    }

    async verifyPassword (password) {
        //verificar password
    }
}

module.exports = User