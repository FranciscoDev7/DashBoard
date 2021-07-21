import styled from 'styled-components'

export const Container = styled.div`
    grid-area:CT;
    background-color:${props=>props.theme.color.primary};
    color:${props=>props.theme.color.white};
    padding:25px;
    height:calc(100vh-(70px));
    overflow-y:scroll;

    ::-webkit-scrollbar{
        width:12px;
        border:1px solid black;
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${props=>props.theme.color.primary};
        border:1px solid ${props=>props.theme.color.gray};
        border-radius:10px;
    }

    ::-webkit-scrollbar-track{
        background-color: #0000005a;
       
    }
   
    `