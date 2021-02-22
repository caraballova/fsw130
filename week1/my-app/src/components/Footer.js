import React from 'react'
import { ThemeContextConsumer } from './themeContext'

function Footer() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div id="footer" className={`${context.theme}-theme`}>
                    <p>2020 FS Web Dev Student</p>
                </div>
            )}
        </ThemeContextConsumer>
    )
}

export default Footer