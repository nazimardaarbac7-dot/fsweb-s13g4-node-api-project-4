const bcrypt = require("bcrypt")
const users = require("../data/users")

// CREATE (register)
async function createuser(kullaniciAdi, sifre) {
    const hashedPassword = await bcrypt.hash(sifre, 10)

    const newUser = {
        id: users.length + 1,
        kullaniciAdi,
        sifre: hashedPassword,
    }

    users.push(newUser);
    return newUser
}

// READ ALL USERS 
function getAllUsers() {
    return users
}

// FIND USER ( username ile)
function findUserByUsername(kullaniciAdi) {
    return users.find(u => u.kullaniciAdi === kullaniciAdi)
}

// LOGIN VALIDATION 
async function validateUser(kullaniciAdi,sifre){
    const user = findUserByUsername(kullaniciAdi);

    if (!user) return null

    const isMatch = await bcrypt.compare(sifre,user.sifre)

    if (!isMatch) return null

    return user
}

module.exports = {
    createuser,
    getAllUsers,
    findUserByUsername,
    validateUser,
}

