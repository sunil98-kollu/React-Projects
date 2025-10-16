const { userModel } = require("../Models/UserModel");


const getUser = ('/',async (req, res)=>{
  const data = await userModel.find();
  res.json(data)
})


const postUser = async (req, res) => {
  try {
    const { fullName,phoneNumber,email, password } = req.body;
    const newUser = new userModel({fullName,phoneNumber, email, password });
    await newUser.save();
    res.status(201).json({ message: "Data is inserted successfully" });
  } catch (e) {
    res.status(400).json({ message: "Failed to insert the data!" });
  }
};

module.exports ={
    postUser, getUser
}



/*

*/