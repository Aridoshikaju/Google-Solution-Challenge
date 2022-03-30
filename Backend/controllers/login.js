const { db } = require("../Database/config");
const jwt = require("jsonwebtoken");


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
  let flag = false;
  try {
    const loc = db.collection("account").doc(check_in);
    const email_data = await loc.listCollections();
    email_data.forEach(async (collection) => {
      if (collection.id == email) {
        flag = true;
        console.log("User found")
      }
    });
  } catch {
    console.log("failed to get data");
  }
  //If the user exists the flag returns true
  console.log("unique?" ,flag)
  return flag;
};

const Check_password = async (email, password, check_in) => {
  const loc = db
    .collection("account")
    .doc(check_in)
    .collection(email)
    .doc("base");
  const base = await loc.get();
  const ret_password = base.data().password;
  if (ret_password == password) {
    return true;
  } else {
    return false;
  }
};

const signup_user = async (req, res, next) => {
  const { name, email, password, age, phone_no, id } = req.body;
  newUser = {
    id: id,
    name: name,
    email: email,
    password: password,
    age: age,
    phone_no: phone_no,
  };
  let token;
  const loc = db.collection("account").doc("user");
  const flag = await check_if_unique(email, "user");
  try {
    if (!flag) {
      const data = await loc.collection(email).doc("base").set(newUser);
      console.log("New user added successfully");
    } else {
      console.log("user already exits");
      res.ststus(400).json({ error: "USer Already exists" });
      // next()
      return
    }
  } catch {
    console.log("Failed to add user");
    res.status(400).json({ error: "failed to add user" });
    // next()
    return
  }
  try {
    token = jwt.sign(
      { email: newUser.email, who: "user" },
      "not_meant_to_be_shared",
      {
        expiresIn: "1h",
      }
    );
  } catch {
    console.log("error creating token");
  }
  res.status(201).json({ email: newUser.email, token: token });
};

const signup_hotel = async (req, res, next) => {
  console.log("here")
  const { hotel_name, owner_name, email, pincode, phone_no, password } =
    req.body;
  newUser = {
    hotel_name: hotel_name,
    owner_name: owner_name,
    email: email,
    pincode: pincode,
    phone_no: phone_no,
    password: password,
  };
  let token;
  const loc = db.collection("account").doc("hotel");
  const flag = await check_if_unique(email, "hotel");
  try {
    if (!flag) {
      const data = await loc.collection(email).doc("base").set(newUser);
      console.log("New hotel user added successfully");
    } else {
      console.log("hotel user already exits");
      res.ststus(400).json({ error: "hotel USer Already exists" });
      next()
    }
  } catch {
    console.log("Failed to add hotel user");
    res.ststus(400).json({ error: "failed to add user" });
    next()
  }
  try {
    token = jwt.sign(
      { email: newUser.email, who: "hotel" },
      "not_meant_to_be_shared",
      {
        expiresIn: "1h",
      }
    );
  } catch {
    console.log("error creating token");
  }
  res.status(201).json({ email: newUser.email, token: token });
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = {
    email: email,
    password: password,
  };
  const loc = db.collection("account");

  const user_flag = check_if_unique(email, "user");
  const hotel_flag = check_if_unique(email, "hotel");
  const admin_flag = check_if_unique(email, "admin");

  let logged; //to decide who logged in
  if (user_flag) {
    if (Check_password(email, password, "user") == true) {
      logged = "user";
    } else {
      logged = "Credentials don't match";
    }
  } else if (hotel_flag) {
    if (Check_password(email, password, "hotel")) {
      logged = "hotel";
    } else {
      logged = "Credentials don't match";
    }
  } else if (admin_flag) {
    if (Check_password(email, password, "admin")) {
      logged = "admin";
    } else {
      logged = "Credentials don't match";
    }
  } else {
    logged = false;
  }
  try {
    token = jwt.sign(
      { email: user.email, who: logged },
      "not_meant_to_be_shared",
      {
        expiresIn: "1h",
      }
    );
  } catch {
    console.log("error creating token");
  }
  if (!logged) {
    res.status(401).json({ email: user.email, token: token });
  } else {
    res.status(201).json({ email: user.email, token: token });
  }
};


exports.getUsers = getUsers;
exports.signup_user = signup_user;
exports.signup_hotel = signup_hotel;
exports.login = login;
