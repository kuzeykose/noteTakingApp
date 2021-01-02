const express = require('express')
const router = express.Router()

const { admin } = require('../../firebaseConfig')
const { v4: uuidv4 } = require('uuid');

const db = admin.firestore();

router.get('/', (req, res) => {
  db.collection("notes").get().then(col => {
    const documents = col.docs.map(document => {
      return document.data()
    })
    res.send(documents);
  })
})

router.post('/add-note', (req, res) => {
  console.log(req.body);
  const id = uuidv4();
  const data = {
    title: req.body.title,
    note: req.body.note,
    id: id
  }

  db.collection('notes').doc(id).set(data).then(() => {
    db.collection("notes").get().then(col => {
      const documents = col.docs.map(document => {
        return document.data()
      })
      res.send(documents);
    })
  })
})

router.post('/update-note', (req, res) => {
  const data = {
    title: req.body.title,
    note: req.body.note,
    id: req.body.id
  }

  db.collection('notes').doc(req.body.id).set(data).then(() => {
    db.collection("notes").get().then(col => {
      const documents = col.docs.map(document => {
        return document.data()
      })
      res.send(documents);
    })
  })
})

router.post('/delete-note', (req, res) => {
  db.collection('notes').doc(req.body.id).delete().then(() => {
    db.collection("notes").get().then(col => {
      const documents = col.docs.map(document => {
        return document.data()
      })
      res.send(documents);
    })
  })
})

module.exports = router