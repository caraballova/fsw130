import React from "react"
import {connect} from "react-redux"
import {addContact, removeContact} from "./redux"
import {useDispatch} from 'react-redux'
import Form from './components/contactForm'
import Contact from './components/Contacts'
import './App.css';

function App (props) {
  const dispatch = useDispatch()
  function remContact (e) {
    const id = e.target.parentNode.id
    dispatch(removeContact(id))
  }
    return (
      <div className="submitText">
        <Form />
        {props.contacts.map((x) => {           
          return <Contact name = {x.name} email = {x.email} id={x.id} onClick={remContact}/>
        })}
      </div>
    );
  }

function mapStateToProps (state) {
  return {
    contacts: state
  }
}

export default connect(mapStateToProps, {addContact, removeContact})(App)