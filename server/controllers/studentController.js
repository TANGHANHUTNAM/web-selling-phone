const getStudent = (req, res) => {
    //call model
    res.send("getStudent")
}

const getStudentByID = (req, res) => {
    //call model
    res.send("getStudentByID " +  req?.params?.id ?? "")
}

const insertStudent = (req, res) => {
    //call model
    res.send("insertStudent")
}

module.exports = {
    getStudent,getStudentByID,insertStudent
}