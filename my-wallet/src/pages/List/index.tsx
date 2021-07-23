import React, {useMemo, useState} from "react"
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

interface IRoute{
  match:{
    params:{
      type: string
    }
  }
}

const List: React.FC<IRoute>= ({match}) => {
  const {type } = match.params
  const [pageType, setPageType] = useState<string>(type)
   

  console.log(pageType)

  const title = useMemo(()=>{
      return type === 'entries'? 'Entradas':'Saídas' 
  },[type])

  const lineColor = useMemo(()=>{
      return type === 'entries'? '#F7931B':'#E44C4E'
  }, [type])

    return(
        <Container>
            <ContentHeader  title={title} lineColor={lineColor}>
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