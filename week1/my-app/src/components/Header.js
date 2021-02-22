import React from 'react'
import { ThemeContextConsumer } from './themeContext'

function Header() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p>Context Theme</p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Header 