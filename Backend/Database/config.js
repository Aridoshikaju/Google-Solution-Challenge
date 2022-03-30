const admin = require ('firebase-admin')
const serviceAccount = require('./Sensitive/terrathon-709b5-firebase-adminsdk-bwiez-d51a75e226.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

module.exports= { db }