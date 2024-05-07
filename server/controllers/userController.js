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
const PAGE_SIZE = 10
const getAllUsers = async (req, res) => {
    var page = req.query.page;
    if(page){
        page = parseInt(page);
        if(page <= 0) page = 1;
        var elementsPass = (page -1)*PAGE_SIZE; // 10 phan tu tren 1 trang

        await UserModel.find({}).skip(elementsPass).limit(PAGE_SIZE)
        .then(data => {
            res.json(data)
        })
        .catch(error => {
            res.status(500).json(error)
        })
    } else {
        await UserModel.find({}).then(data => {
            res.status(200).json(data)
        }).catch(error => {
            res.status(500).json(error)
        })
    }
    
}

// UPDATE USER
const updateUser = async (req, res) => {
    const id = req.params.id;
    const {fullName, phoneNumber, address ,email, password} = req.body;
    await UserModel.findByIdAndUpdate(id, {fullName: fullName, phoneNumber: phoneNumber, address: address ,email: email, password: password})
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
    var address = req.body.address;
    var email = req.body.email;
    var password = req.body.password;
    await UserModel.create({
            fullName: fullName,
            phoneNumber: phoneNumber,
            address: address,
            email: email,
            password: password,
            isAdmin: false,
    }).then(data => {
        res.status(200).json({message: "Đăng ký thành công!", data})
    }).catch(error => {
        res.status(500).json(error)})
}

// LOGIN 
const loginUser = async (req, res) => {
    var email = req.body.email;
    var password = req.body.password;
    const user = await UserModel.findOne({email: email, password: password})
    if(user){
        res.status(200).json(user)
    } else {
        res.status(500).json({message: "Email hoặc mật khẩu không đúng!"})
    }
    }

// 
const getUserByEmail = async (req, res) => {
  const email = req.query.email;
  const phoneNumber = req.query.phoneNumber;
  await UserModel.findOne({
    $or: [{ email: email }, { phoneNumber: phoneNumber }]
  })
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res.status(500).json(error);
    });
};

module.exports = {
  getUserByEmail,  registerUser, loginUser, getAllUsers, updateUser, deleteUser, getUserByID
}