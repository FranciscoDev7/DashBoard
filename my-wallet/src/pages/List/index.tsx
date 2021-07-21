import React from "react"
import ContentHeader from "../../components/ContentHeader"
import SelectInputs from "../../components/SelectInputs"
import {Container, Content, Filters} from './styles'
import HistoryFinanceCard from "../../components/HistoryFinanceCard"

const month =[
    {value:7, label:'julho'},
    {value:8, label:'agosto'},
    {value:9, label:'setembro'},
]

const year= [
    {value:2019, label:2019},
    {value:2020, label:2020}

]

const List: React.FC = () => {
    return(
        <Container>
            <ContentHeader  title="Saidas" lineColor="#F7931B">
                <SelectInputs options={month}/>
                <SelectInputs options={year}/>
            </ContentHeader>
            <Filters>
              <button
                className='tag-filter recurrent'
                
              >
                Recorrentes
              </button>

              <button
                className='tag-filter eventual'
               
              >
                Eventuais
              </button>
            </Filters>
            <Content>
                <HistoryFinanceCard
                  
                  tagColor="#ffffff"
                  title="Conta de luz"
                  date="21/07/2021"
                  amount="R$ 300"
                />
         
            </Content>
        </Container>
    )
}

export default List