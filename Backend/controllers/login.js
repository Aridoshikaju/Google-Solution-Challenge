const uuid = require("uuid");
const { validationResult } = require("express-validator");
const { db } = require("../Database/config");

const getUsers = async (req, res, next) => {
  let users;
  try {
    users = await db.collection("account").doc("user").get();
  } catch (err) {
    const error = new Error("Failed to fetch user");
    error.code = 500;
    next(error);
  }
  res.json({ users: users.map((user) => user.toObject({ getters: true })) });
};

const check_if_unique = async (email, check_in) => {
  console.log("This is working");
  const data = await db.collection("account").doc(check_in).listCollections();
  const flag = await data.findOne({ email: email });
  return flag;
};

const signup_hotel = async (req, res, next) => {
  // const errors = validationResult(req);
  // if(!errors.isEmpty()){
  //     const error = new Error('dummy error for now logic can be applied later at a point')
  //     error.code = 202
  //     next(error)
  // }

  const { hotel_name, owner_name, email, pincode, phone_no, password } =
    req.body;

  //make a check if the email is already taken or not

  newUser = {
    hotel_name: hotel_name,
    owner_name: owner_name,
    email: email,
    pincode: pincode,
    phone_no: phone_no,
    password: password,
  };
  const flag = check_if_unique(email, hotel);
  // flag says True if the user already exists
  if (!flag) {
    db.collection("account")
      .doc("hotel")
      .collection(email)
      .doc("base")
      .add(newUser);
  }

  //push the new created user to the data base

  res.status(201).json({ user: newUser });
};

const signup_user = async (req, res, next) => {
  // const errors = validationResult(req);
  // if(!errors.isEmpty()){
  //     const error = new Error('dummy error for now logic can be applied later at a point')
  //     error.code = 202
  //     next(error)
  // }

  const { name, email, password, age, phone_no, id } = req.body;

  //make a check if the email is already taken or not

  newUser = {
    id: id,
    name: name,
    email: email,
    password: password,
    age: age,
    phone_no: phone_no,
  };

  //push the new created user to the data base
  db.collection("account")
    .doc("user")
    .collection({ email })
    .doc("base")
    .add(newUser);

  res.status(201).json({ user: newUser });
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  //furthur
  //status 401 means auth failed
};

exports.getUsers = getUsers;
exports.signup_user = signup_user;
exports.signup_hotel = signup_hotel;
exports.login = login;
