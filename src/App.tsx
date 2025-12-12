import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/SideBar'
import About from './containers/About'
import Projects from './containers/Projects'

import LightTheme from './themes/light'
import DarkTheme from './themes/dark'

import { useState } from 'react'

function App() {
    const [usingDarkTheme, setUsingDarkTheme] = useState(false)

    function toggleTheme() {
        setUsingDarkTheme(!usingDarkTheme)
    }

    return (
        <ThemeProvider theme={usingDarkTheme ? DarkTheme : LightTheme}>
            <EstiloGlobal />
            <Container>
                <Sidebar toggleTheme={toggleTheme} />
                <main>
                    <About />
                    <Projects />
                </main>
            </Container>
        </ThemeProvider>
    )
}

export default App
