import React from 'react'
import Layout from '../src/components/Layout'
import GlobalStyles from './styles/GlobalStyles'
import {ThemeProvider} from 'styled-components'
import Dark from '../src/styles/Themes/Dark'
import Dashboard from './pages/Dashboard'
import List from './pages/List'

const App: React.FC = () => {
    return (
        <ThemeProvider theme={Dark}>
        <GlobalStyles/>
        <Layout>
            <List/>
        </Layout>
        </ThemeProvider>
    )
}

export default App
