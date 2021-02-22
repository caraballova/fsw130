import React from 'react'
import { ThemeContextConsumer } from './themeContext'

function Select() {
    return (
        <ThemeContextConsumer>
            {context => (

                <select onClick={context.handleTheme} className={`${context.theme}-theme`}>
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                </select>

            )}
        </ThemeContextConsumer>
    )
}

export default Select 