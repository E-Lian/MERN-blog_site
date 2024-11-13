const asyncHandler = require("express-async-handler");
const User = require("../models/user");

// get all users
exports.user_list = asyncHandler(async (req, res, next) => {
    const users = await User.find();
    res.json({ users: users});
});

// create a user
exports.make_user = asyncHandler(async (req, res, next) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });
    const newUser = await user.save();
    res.status(201).json(newUser);
})

// check username and password combination
exports.check_user = asyncHandler(async (req, res, next) => {
    // TODO
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