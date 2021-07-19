import React from "react"
import {Container} from './styles'
import ContentHeader from "../../components/ContentHeader"
import Content from "../../components/Content"
import SelectInputs from "../../components/SelectInputs"

const Dashboard: React.FC = () => {

 
    const options =[
        {value:'a', label:'b'},
        {value:'b', label:'d'},
        {value:'c', label:'f'},
    ]   
    return(
        <Container>
            <ContentHeader title="Dashboard" lineColor='#fff'>
                <SelectInputs options={options}/>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard




