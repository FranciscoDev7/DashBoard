import React from 'react'
import Layout from '../src/components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import Dark from '../src/styles/Themes/Dark'
import Routes from './routes'


const App: React.FC = () => {
    return (
        <ThemeProvider theme={Dark}>
        <GlobalStyles/>
        <Routes/>
        </ThemeProvider>
    )
}

export default App
