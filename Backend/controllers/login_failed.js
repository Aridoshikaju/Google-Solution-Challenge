const uuid = require("uuid");
const { validationResult } = require("express-validator");
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
    let temp
    try {
        const loc = db.collection('account').doc(check_in)
      const email_data = await loc.listCollections();
      email_data.forEach( async (collection) => {
          temp = (await loc.collection(collection.id).doc('base').get()).data()
          console.log(temp)
      });
    } catch {
      console.log("failed to get data");
    }
  };

// const check_if_unique = async (email, check_in,newUser) => {
//   console.log(email, check_in);
//   console.log("check_in", check_in);
//   let data;
//   let flag;
//   let temp
//   try {
//     // working set up of data
//     // const nodek = await db.collection('account').doc(check_in).collection(email).doc('base').set(newUser)

//     data = await db.collection('account').doc(check_in).listCollections();
//     flag=false;
//     // console.log(data)
//     // flag = await data.findOne({email:email})
//     console.log("here final");
//     data.forEach( async (collection) => {
//       // console.log(collection.doc('base').data())
//       console.log(collection.doc('base'))
//       if(collection.id == email)
//       {
//         console.log("before")
//         temp = await db.collection('account').doc(check_in).collection(collection.id).doc('base').get()
//         flag = temp.data()
//         console.log("after")
//       }
//     });
//     console.log("printing flag\n\n")
//     console.log(flag);
//   } catch {
//     flag=false
//     console.log("failed to get data");
//   }
//   // console.log(flag)
//   return flag;
// };





// const check_if_unique2 = async (email, check_in) => {
//   const sfRef = db.collection("accounts").doc("user");
//   const collections = await sfRef.listCollections();
//   collections.forEach((collection) => {
//     console.log("Found subcollection with id:", collection.id);
//   });
// };

const signup_hotel = async (req, res, next) => {
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
  const flag = check_if_unique(email, "hotel");
  // flag says True if the user already exists
  try {
    if (!flag) {
      await db
        .collection("account")
        .doc("hotel")
        .collection(email)
        .doc("base")
        .add(newUser);
      try {
        token = jwt.sign(
          { email: newUser.email, who: "hotel" },
          "not_meant_to_be_shared",
          {
            expiresIn: "1h",
          }
        );
      } catch {
        console.log("error with token");
        return;
      }
      res.status(201).json({ email: newUser.email, token: token });
    } else {
      res.status(400).json({ error: "The user already exists" });
    }
  } catch {
    console.log("This is when we a ");
    return;
  }
  //push the new created user to the data base
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
  const flag = check_if_unique(email, "user",newUser);
  let token;
  try {
    if (!flag) {
      await db
        .collection("account")
        .doc("user")
        .collection({ email })
        .doc("base")
        .add(newUser);

      try {
        token = jwt.sign(
          { email: newUser.email, who: "user" },
          "not_meant_to_be_shared",
          {
            expiresIn: "1h",
          }
        );
      } catch {
        console.log("error with token");
        return;
      }
      res.status(201).json({ email: newUser.email, token: token });
    } else {
      res.status(400).json({ error: "The user already exists" });
    }
  } catch {
    console.log("error with token");
    return;
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const users = await db.collection("account").doc("user").listCollections();
  } catch {
    console.log("no such Users");
  }
  try {
    const hotels = await db
      .collection("account")
      .doc("hotel")
      .listCollections();
  } catch {
    console.log("no such hotels");
  }
  try {
    const admin = await db.collection("account").doc("admin").listCollections();
  } catch {
    console.log("no such admins");
  }
  const user_flag = users.findOne({ email: email });
  const hotel_flag = hotels.findOne({ email: email });
  const admin_flag = admin.findOne({ email: email });

  const flag = user_flag
    ? "user"
    : hotel_flag
    ? "hotel"
    : admin_flag
    ? "admin"
    : false;
  let token;
  try {
    if (flag) {
      try {
        token = jwt.sign(
          { email: newUser.email, who: flag },
          "not_meant_to_be_shared",
          {
            expiresIn: "1h",
          }
        );
      } catch {
        console.log("error with token creation");
        return;
      }
      res.status(202), json({ email: email, token: token });
    } else {
      res.status(400).json({ error: "There is no such user in the data base" });
    }
    // if (flag == "user" && user_flag.password == password) {
    //   res.status(202).json({});
    // }
    // if (flag == "hotel" && hotel_flag.password == password) {
    //   res.status(202).json({});
    // }
  } catch {
    console.log("No such user in any feild");
  }
};

exports.getUsers = getUsers;
exports.signup_user = signup_user;
exports.signup_hotel = signup_hotel;
exports.login = login;
