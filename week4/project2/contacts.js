const redux = require("redux");

function addContact(contact) {
    return {
        type: "ADD_CONTACT",
        payload: contact
    }
}

function deleteContact(contact) {
    return {
        type: "DELETE_CONTACT",
        payload: contact
    }
}

const initialstate = {
    contactList: [],
    contacts: 
    {
        name: "",
        phone: "",
        email: ""
    }
}

function reducer(state = initialstate, action) {
    switch(action.type) {
        case "ADD_CONTACT":
            return {
                ...state,
                contacts: action.payload,
                contactList: [...state.contactList, action.payload]
            }
        case "DELETE_CONTACT": {
            const updatedArr = state.contactList.filter(contact => contact !== action.payload)
            console.log(updatedArr)
                return {
                    ...state,
                    contactList: updatedArr
                }
            }
        default:
            return state
    }
}


const store = redux.createStore(reducer)
store.subscribe(() => {
    console.log(store.getState())
})

// Add Contact

store.dispatch(addContact({name: "Bob Taylor", phone: "407-856-9847", email: "btaylor@123.com"}))
store.dispatch(addContact({name: "Crystal Evans", phone: "978-587-8231", email: "cevans@123.com"}))
store.dispatch(addContact({name: "Jessica Land", phone: "524-859-7485", email: "jland@123.com"}))
store.dispatch(addContact({name: "Rachel Ramos", phone: "251-354-5787", email: "rramos@123.com"}))
store.dispatch(addContact({name: "Bob Marley", phone: "282-587-6345", email: "bmarley@123.com"}))
store.dispatch(addContact({name: "Alvin Allen ", phone: "982-451-8567", email: "aallen@123.com"}))

// Delete Contact

store.dispatch(deleteContact({name: "Bob Taylor", phone: "407-856-9847", email: "btaylor@123.com"}))