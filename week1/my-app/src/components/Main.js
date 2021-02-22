import React from 'react'
import { ThemeContextConsumer } from './themeContext'
function Main() {
    return (
        <ThemeContextConsumer>
            {context => (
                <div className={`${context.theme}-theme`}>
                    <p >Enjoy the Colors &#128513;</p>
                </div>
            )}

        </ThemeContextConsumer>
    )
}

export default Main