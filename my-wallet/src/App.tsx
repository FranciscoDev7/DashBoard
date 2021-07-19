import React from 'react'
import Layout from '../src/components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import Dark from '../src/styles/Themes/Dark'
import Light from '../src/styles/Themes/Light'
import Dashboard from './pages/Dashboard'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={Dark}>
        <GlobalStyles/>
        <Layout>
            <Dashboard/>
        </Layout>
        </ThemeProvider>
    )
}

export default App
