const admin = require('firebase-admin');
const serviceAccount = require('./service-account-key.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

admin.firestore().settings({ ignoreUndefinedProperties: true })

module.exports.admin = admin
