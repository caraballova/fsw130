import React, { Component } from 'react'
const { Provider, Consumer } = React.createContext()

class ThemeContextProvider extends Component {
    state = {
        theme: "dark"
    }

    toggleTheme = () => {
        this.setState(prevState => {
            switch (true) {
                case (prevState.theme === 'dark'):
                    return { theme: "light" }
                case (prevState.theme === 'light'):
                    return { theme: "dark" }
                default:
                    return { theme: "light" }
            }
        })
    }
    handleTheme = (event) => {
        this.setState({
            theme: event.target.value
        })
    }

    render() {
        return (
            <Provider value={{ theme: this.state.theme, toggleTheme: this.toggleTheme, handleTheme: this.handleTheme }}>
                {this.props.children}
            </Provider>
        )
    }

}
export { ThemeContextProvider, Consumer as ThemeContextConsumer }