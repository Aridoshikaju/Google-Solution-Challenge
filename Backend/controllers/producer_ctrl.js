const { validationResult } = require('express-validator');
const { db } = require('../Database/config.js');

const fetchTotal = async (total_val) => {
    const totalRef = db.collection('Producer DB');
    const snapshot = await totalRef.get();
    // let total = {};
    // console.log(snapshot);
    snapshot.forEach((doc) => {
        console.log(doc.id, '=>', doc.data());
        // docId = (doc.id);
        // docData = doc.data();
        // total[docId] = docData;
    });
    // console.log("total: ", total);
}

const producer_details = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Dummy Error');
        error.code = 202;
        next(error);
    }
    const { username, email, rice, roti, curryveg, currynonveg, time } = req.body;
    console.log(username, email, rice, roti, curryveg, currynonveg, time);


    let ts = Date.now();
    let date_ob = new Date(ts);
    let date_today = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();
    if (date_today < 10)
        date_today = "0" + date_today;
    if (month < 10)
        month = "0" + month;

    date = year + "-" + month + "-" + date_today;

    const hotelDocRef = db.collection('accounts').doc('hotel').collection(email).doc(date);
    console.log(date);
    db.collection('accounts').doc('hotel').collection(email).doc(date).set({
        rice: rice,
        roti: roti,
        curryveg: curryveg,
        currynonveg: currynonveg,
        time: time,
    })
        .then(console.log("Successfully added to accounts!"))
        .catch(console.log("Failed to add to accounts!"));
    
        let total_val = 0;

    fetchTotal(total_val);
    db.doc('Producer DB/' + date + "/" + email + "/dummy").set({
        rice: rice,
        roti: roti,
        curryveg: curryveg,
        currynonveg: currynonveg,
        time: time,
    })
        .then(console.log("Successfully added to Producer DB!"))
        .catch(console.log("Failed to add to Producer DB!"))
}

exports.producer_details = producer_details
