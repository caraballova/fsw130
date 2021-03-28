import {createStore} from 'redux'

// Action

export function addContact (payload) {
  return {
    type: "ADD_CONTACT",
    payload: payload
  }
}

export function removeContact (payload) {
  return {
    type: "REMOVE_CONTACT",
    payload: payload
  }
}

// Reducer

function reducer(state = [], action){
  switch(action.type){
    case "ADD_CONTACT":
      return [...state, action.payload]
    case "REMOVE_CONTACT":
      const newArr = state.filter(x => x.id !== action.payload)
      return newArr
    default: 
      return state 
    
  }
}

// Store

const store = createStore(reducer)
store.subscribe(() => console.log(store.getState()))
export default store