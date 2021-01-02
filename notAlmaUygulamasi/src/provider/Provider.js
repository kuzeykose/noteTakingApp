import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'

const FirebaseContext = createContext()

const FirebaseProvider = (props) => {
  const [note, setNote] = useState()

  useEffect(() => {
    axios.get('http://localhost:3000/api/note')
      .then(res => {
        setNote(res.data)
      }).catch(function (error) {
        console.log(error);
      })
  }, [note])

  const addNote = (title, note) => {
    axios.post('http://localhost:3000/api/note/add-note', {
      title,
      note
    }).then(res => {
      setNote(res.data)
    }).catch(function (error) {
      console.log(error);
    })
  }

  const updateNote = (id, title, note) => {
    axios.post('http://localhost:3000/api/note/update-note', {
      id,
      title,
      note
    }).then(res => {
      setNote(res.data)
    }).catch(function (error) {
      console.log(error);
    })
  }

  const deleteNote = (id) => {
    console.log(id);
    axios.post('http://localhost:3000/api/note/delete-note', {
      id
    }).then(res => {
      console.log(res.data);
    }).catch(function (error) {
      console.log(error);
    })
  }

  return (
    <FirebaseContext.Provider
      value={{
        note: note,
        addNote: addNote,
        updateNote: updateNote,
        deleteNote: deleteNote
      }}>
      {props.children}
    </FirebaseContext.Provider >
  )
};

export { FirebaseProvider, FirebaseContext }
