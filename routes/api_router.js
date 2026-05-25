const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken")
const userService = require("../services/userService")
const auth = require("../middleware/auth")

// REGISTER
router.post("/register", async (req, res) => {
  const { kullaniciAdi, sifre } = req.body

  const user = await userService.createuser(kullaniciAdi, sifre)

  res.json(user)
})

// LOGIN 
router.post("/login",async(req,res)=>{
  const {kullaniciAdi,sifre} = req.body

  const user = await userService.validateUser(kullaniciAdi,sifre)

  if(!user){
    return res.status(401).json({message:"Hatalı Giriş"})
  }

  const token = jwt.sign(
    { id: user.id, kullaniciAdi:user.kullaniciAdi},
    process.env.JWT_SECRET,
    {expiresIn : "45m"}
  )

  res.json({token})
})

// PROTECTED 
router.get("/users",auth,(req,res)=>{
  res.json(userService.getAllUsers())
})

module.exports = router