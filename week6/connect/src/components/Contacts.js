import React from 'react'

function Contact (props) {
  return (
    <div id={props.id}>
      <h1>{props.name}</h1>
      <h2>{props.email}</h2>
      <button onClick={props.onClick} className="button">Remove</button>
    </div>
  )
}

export default Contact