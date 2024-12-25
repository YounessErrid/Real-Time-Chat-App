const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// Register a new user
const register = async (req, res) => {
  
  const { email, password, fullname } = req.body;

  try {
    // Validate the request body for empty fields
    if (!email || !password || !fullname) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Validate the email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    // Check if the email already exists in the database
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res
        .status(400)
        .json({ message: "Email already exists! try other email" });
    }

    // Validate the password length
    if (password.length < 8) {
      return res.status(400).json({
        error: "Password must be at least 8 characters long",
      });
    }

    //hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      password: hashedPassword,
      fullname,
    });

    await user.save();

    res.status(201).json({
      message: "User regestred successfully",
      userId: user._id,
    });

  } catch (err) {
    res.status(500).json({ message: "Server error! User not regestred" });
  }
};

//login user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate the request body for empty fields
    if (!email || !password) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    // Validate the email format
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Invalid email format",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        error: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        error: "Invalid credentials",
      });
    }

    res.status(200).json({
      message: "User logged in successfully",
      userId: user._id,
    });  
  } catch (err) {
    res.status(500).json({ message: "Server error! User not logged in" });
  }
  
};

module.exports = {register, login};