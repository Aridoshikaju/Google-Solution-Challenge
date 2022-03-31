const { validationResult } = require('express-validator')
const {db} = require("../Database/config")
//var time = require('express-timestamp')


const customer_details = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        const error = new Error('Dummy Error')
        error.code = 202
        next(error)
    }
    const {ppl_qty, line1, line2, pin, city} = req.body;
    console.log(ppl_qty + line1 + line2 + pin + city);

    let date_ob = new Date();
    let date = date_ob.getDate();
    let month = date_ob.getMonth();
    let year = date_ob.getFullYear();
    let fin_date = date+"-"+month+"-"+year
    const stored_data = JSON.parse(localStorage.getItem("userData"))
    cons_email = stored_data.email      // To be recieved from login page
    db.doc('Consumer DB/'+fin_date+"/"+cons_email+"/dummy").set({
        PeopleCount: ppl_qty,
        AddrLine1: line1,
        AddrLine2: line2,
        Pincode : pin,
        City: city
    }).then(console.log("Successful!"))
}

exports.customer_details = customer_details