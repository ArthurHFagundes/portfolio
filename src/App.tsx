import { ThemeProvider } from 'styled-components'

import EstiloGlobal, { Container } from './styles'
import Sidebar from './containers/SideBar'
import About from './containers/About'
import Projects from './containers/Projects'

import LightTheme from './themes/light'

function App() {
    return (
        <ThemeProvider theme={LightTheme}>
            <EstiloGlobal />
            <Container>
                <Sidebar />
                <main>
                    <About />
                    <Projects />
                </main>
            </Container>
        </ThemeProvider>
    )
}

export default App
