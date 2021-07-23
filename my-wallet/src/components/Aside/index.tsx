import React from 'react'
import {Container, Title,Header, LogoImg, MenuContainer,MenuItemLink} from './styles'
import Logo from '../../assests/logo.svg'
import {MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp} from 'react-icons/md'

const Aside: React.FC = () => {
    return (
    <Container>
        <Header>
            <LogoImg src={Logo} alt= "Logo"/>
            <Title>Minha Carteira</Title>
        </Header>
        <MenuContainer>
           <MenuItemLink href='/dashboard'>
            <MdDashboard/>
                DashBoard
            </MenuItemLink>
           
            <MenuItemLink href='/list/entries'>
            <MdArrowUpward/>
                Entradas
            </MenuItemLink>
            
            <MenuItemLink href='/list/spendings'>
            <MdArrowDownward/>
                Saídas
            </MenuItemLink>
            
            <MenuItemLink href='#'>
            <MdExitToApp/>
                Sair
            </MenuItemLink>
        </MenuContainer>
    </Container>  
    )
}

export default Aside
