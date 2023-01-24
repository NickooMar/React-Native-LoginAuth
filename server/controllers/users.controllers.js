const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleNewUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "Username and Password are required" });
  }

  const duplicate = await User.findOne({ username }).exec();

  if (duplicate) {
    return res.status(409).json({ message: "User already exists" });
  }

  try {
    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await User.create({
      username,
      password: hashedPassword,
    });
    console.log(result);
    res.status(201).json({ success: `User ${username} created successfully` });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const foundUser = await User.findOne({ username }).exec();
  if (!foundUser) return res.sendStatus(401);

  const matchedPassword = await bcrypt.compare(password, foundUser.password);

  if (matchedPassword) {
    // Create JWT
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = { loginUser, handleNewUser };
