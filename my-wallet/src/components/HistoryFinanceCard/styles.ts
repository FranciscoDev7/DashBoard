import styled from 'styled-components'


interface ITagProps{
    color:string
}

export const Container = styled.li`
    background-color: ${props=>props.theme.color.tertiary};
    list-style:none;
    border-radius:5px;
    margin:10px 0;
    padding: 12px 10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    cursor:pointer;
    transition: all .4s;

    position: relative; 

    &:hover{
        opacity:.7;
        transform:translateX(15px);
    }

  

`

export const Tag = styled.div<ITagProps>`
    left:0;
    position:absolute;
    height:60%; 
    width:10px;
    background-color: ${props=>props.color};
`

export const TextContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin-left:10px;
    justify-content:space-between;
`