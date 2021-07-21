import styled from 'styled-components'


export const Container = styled.div`
    grid-area: AS;
    padding-left:20px;
    background-color: ${props=>props.theme.color.secondary};
    
`
export const Title = styled.h3`
    color:${props=>props.theme.color.white};
    margin-left:10px;
`
export const Header = styled.header`
    height: 70px;
    display:flex;
    align-items:center ;
`

export const LogoImg = styled.img`
    height:40px;
`

export const MenuContainer=styled.nav`
    display:flex;
    flex-direction:column;  
    margin-top:50px;
`

export const MenuItemLink=styled.a`
    display:flex;
    align-items:center; 
    text-decoration:none;
    color:${props=>props.theme.color.info};
    transition:opacity .3s;
    margin:7px 0; 
    &:hover{
        opacity:.7;

    }
    > svg{
        margin-right:5px;
        font-size:20px;
    }
`