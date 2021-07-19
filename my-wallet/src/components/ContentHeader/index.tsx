import React from 'react'
import {Container, Title, Controllers} from './styles'
import SelectInputs from '../SelectInputs'

const ContentHeader: React.FC = () => {

    const options =[
        {value:'a', label:'b'},
        {value:'b', label:'d'},
        {value:'c', label:'f'},
    ]

    return (
    <Container>
       <Title>Titulo</Title> 
       <Controllers>
           <SelectInputs options={options}/>
           <SelectInputs options={options}/>
        </Controllers>
    </Container>  
    )
}

export default ContentHeader
