import React from 'react'
import {ListContextConsumer} from './context'

function Form (props) {
  return (
    <ListContextConsumer>
      {items => (
        <div id="form">
          <form onSubmit={items.sub}>
            <label>Name: </label>
            <input onChange={items.change} type="text" name="name" placeholder="Name"></input>
            
            <label>    Description: </label>
            <input onChange={items.change} type="text" name="desc" placeholder="Description"></input>
            <br />
            <br />
            <label>Image URL: </label>
            <input onChange={items.change} type="text" name="site" placeholder="Image URL"></input>
            <br />
            <br />
            <button id="button">Add &#10004;</button>
            <br />
          </form>
          
        </div>
      )}
      
    </ListContextConsumer>
      
  )
}

export default Form