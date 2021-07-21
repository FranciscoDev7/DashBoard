import styled from "styled-components";

export const Container = styled.div``

export const Content = styled.div``

export const Filters = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    .tag-filter{
        font-size:18px;
        font-weight:500;
        background:none;
        color: ${props=>props.theme.color.white};
        margin:0 10px;
        transition: all .3s;
        cursor:pointer;

        :hover{
            opacity:0.7;
        }
  
    }

    .recurrent::after{
            content: '';
            display:block;
            width: 55px;
            margin:0 auto;
            border-bottom:10px solid ${props=>props.theme.color.warning};
            
        }
        .eventual::after{
            content: '';
            display:block;
            width: 55px;
            margin:0 auto;
            border-bottom:10px solid ${props=>props.theme.color.success};
            
        }
`