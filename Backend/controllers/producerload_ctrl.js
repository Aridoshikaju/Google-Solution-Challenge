const { validationResult } = require('express-validator')
const { db } = require('../Database/config.js')

const producer_load = async (req, res, next) => {
    console.log("producer_load reached\n")
    let docId, docData, email;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Dummy Error')
        error.code = 202
        next(error)
    }

    email = "mail_1@gmail.com"
    const hotelDocRef = db.collection('accounts').doc('hotel').collection(email);
    const snapshot = await hotelDocRef.get();
    let dataObj = {};
    let newObj = {};
    let objArray = [];
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        docId = (doc.id);
        docData = doc.data();
        dataObj[docId] = docData;
        newObj[docId] = docData;
        objArray.push(newObj);
        newObj = {}
    });
    console.log("dataObj", dataObj);
    console.log("objArray: ", objArray);
    res.status(200).send(dataObj);
}


exports.producer_load = producer_load