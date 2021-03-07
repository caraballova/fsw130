import React from 'react';
const { Provider, Consumer } = React.createContext();


class ListContextProvider extends React.Component {
  constructor() {
    super()
    this.state = {
      list: [{
        name: "Moxy",
        desc: "The buoy of the bunch, keeping dreams afloat even in rough seas!",
        img: "https://static-asset-delivery.hasbroapps.com/d2689a6255870dcd7d478528ccc13861c8ac9f20/01f326a6c678398bba9c46658babd49d.png"
      },
      {
        name: "Lucky Bat",
        desc: "Serving up wisdom faster than you can steep a cup of tea!",
        img: "https://static-asset-delivery.hasbroapps.com/d2689a6255870dcd7d478528ccc13861c8ac9f20/9393dcc690413a526d94720b6e757b85.png"
      },
      {
        name: "Ugly Dog",
        desc: "Shopkeeper with swagger, ultra-hyped hype-man!",
        img: "https://static-asset-delivery.hasbroapps.com/d2689a6255870dcd7d478528ccc13861c8ac9f20/b89d4f3c2f6d4ca25b1c6166cd0abc9b.png"
      }],
      name: "",
      desc: "",
      img: ""
    }
    this.handleDelete = this.handleDelete.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  };
  
  handleDelete(e) {
    let deleteBtn = document.getElementsByClassName("cards")
    console.log(deleteBtn)
    for (var i = 0; i < deleteBtn.length; i++) {
      if (e.target === deleteBtn[i]) {
        let x = deleteBtn[i].parentNode
        let y = x.parentNode
        y.removeChild(x)
      }
    }
  }

  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  /* handleEdit(e) {
      let editBtn = document.getElementsByClassName("edit")

      // could not figure out how to incorporate edit button
      // will do more research to submit for a mastery grade
  } */

  handleSubmit(e) {
    e.preventDefault()
    let newEntry = {
      name: this.state.name,
      desc: this.state.desc,
      img: this.state.img
    }
    this.state.list.push(newEntry)
    this.setState({
      name: "",
      desc: "",
      img: ""
    })
  }

  render() {
    const items = this.state.list
    return (
      <Provider value={{ 
          list: items, 
          delete: this.handleDelete, 
          sub: this.handleSubmit, 
          change: this.handleChange,
          }} >

        {this.props.children}

      </Provider>
    )
  }
}






export { ListContextProvider, Consumer as ListContextConsumer };