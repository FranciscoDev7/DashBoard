import React from 'react'
import {Container, Profile, Welcome, UserName} from './styles'

const MainHeader: React.FC = () => {
    return (
    <Container>
        <h1>Toggle</h1>
        <Profile>
            <Welcome>Olá</Welcome>
            <UserName></UserName>
        </Profile>
    </Container>  
    )
}

export default MainHeader
