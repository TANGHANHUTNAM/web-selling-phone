const UserModel = require("../models/userModel.js")

// GET ONE USER
 const getUserByID = async (req, res) => {
    var id = req.params.id;
    await UserModel.findById(id)
    .then(data => {
        res.status(200).json(data)
    })
    .catch(error => {
        res.status(500).json(error)
    })
 }

// GET ALL USERS
const getAllUsers = async (req, res) => {
    UserModel.find({}).then(data => {
        res.status(200).json(data)
    }).catch(error => {
        res.status(500).json(error)
    })
}

// UPDATE USER
const updateUser = async (req, res) => {
    const id = req.params.id;
    const {fullName, phoneNumber, email, password} = req.body;
    await UserModel.findByIdAndUpdate(id, {fullName: fullName, phoneNumber: phoneNumber, email: email, password: password})
    .then(data => {
        res.status(200).json({message: "Cập nhật thành công!", data})
    })
    .catch(error => {
        res.status(500).json(error)
    })
}

// DELETE USER
const deleteUser = async (req, res) => {
    const id = req.params.id;
    await UserModel.findByIdAndDelete(id).then(data => {
        res.status(200).json({message: "Xóa thành công!"})
    }).catch(error => {
        res.status(500).json(error)
    })

}

// REGISTER
const registerUser = async (req, res) => {
    var fullName = req.body.fullName;
    var phoneNumber = req.body.phoneNumber;
    var email = req.body.email;
    var password = req.body.password;
    await UserModel.findOne({email: email}).then(data => {
        if(data){
            res.status(401).json({message: "Email đã tồn tại!"});
        } else {
            return UserModel.create({
            fullName: fullName,
            phoneNumber: phoneNumber,
            email: email,
            password: password,
            isAdmin: false
        })
        }
    }).then(data => {
        res.status(201).json({message: "Đăng ký thành công!", data});
    }).catch(error => 
        {res.status(500).json("Đăng ký thất bại!"), error})
}

// LOGIN 
const loginUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({email: req.body.email});
        if(!user){
            res.status(401).json({message: "Thông tin không chính xác"});
        } else {
            if(user.password !== req.body.password){
                res.status(401).json({message: "Mật khẩu không chính xác!"});
            }
            res.status(200).json({message: "Đăng nhập thành công!"});
        }
    } catch (error) {
        res.status(500).json(error)
    }
}



module.exports = {
    registerUser, loginUser, getAllUsers, updateUser, deleteUser, getUserByID
}