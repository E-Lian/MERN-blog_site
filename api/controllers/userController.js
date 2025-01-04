const asyncHandler = require("express-async-handler");
const User = require("../models/user");
const bcrypt = require("bcrypt");

// get all users
exports.user_list = asyncHandler(async (req, res, next) => {
    const users = await User.find();
    res.json({ users: users});
});

// create a user
exports.make_user = asyncHandler(async (req, res, next) => {
    const { username, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
        return res.status(400).json({ message: "Username already exists" });
    }

    // Generate a salt and hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username: username,
        password: hashedPassword
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
})

// check username and password combination
exports.check_user = asyncHandler(async (req, res, next) => {
    const {username, password} = req.body

    const user = await User.findOne({username: username})
    if (!user) {
        return res.status(404).json({message: "User not found"})
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password)
    if (isMatch) {
        return res.json({message: "Login successful"})
    } else {
        return res.status(401).json({message: "Username/Password incorrect"})
    }
})

// remove a user
exports.remove_user = asyncHandler(async (req, res, next) => {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      res.status(404).send('User not found')
    } else {
      res.json(user)
    }
  })