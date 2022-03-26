const admin = require ('firebase-admin')
const serviceAccount = require('./Sensitive/terrathon-709b5-firebase-adminsdk-bwiez-e03ff9ed43.json')
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

module.exports= { db }