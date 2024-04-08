const jwt = require("jsonwebtonken");

const createJWT = () => {
    let payload = {user: "namtang", password: "1234"};
    let key = process.env.JWT_SEC;
    let token = null;
    try {
        token = jwt.sign(payload, key);
    } catch (error) {
        console.log(error)
    }
    
    return token;
}

const verifyToken = (token) => {
    let data = null;
    let key = process.env.JWT_SEC;
    try {
        let decoded = jwt.verify(token, key)
        data = decoded
    } catch (error) {
        console.log(error)
    }
    return data;
}