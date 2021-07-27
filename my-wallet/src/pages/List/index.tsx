import React, {useMemo, useState, useEffect} from "react"
import ContentHeader from "../../components/ContentHeader"
import SelectInputs from "../../components/SelectInputs"
import {Container, Content, Filters} from './styles'
import HistoryFinanceCard from "../../components/HistoryFinanceCard"
import gains from "../../repositories/gains"
import expenses from "../../repositories/expenses"
import { MenuItemLink } from "../../components/Aside/styles"
import {formatCurrency,formatDate} from '../../utilities/functions'

const month =[
    {value:7, label:'Julho'},
    {value:8, label:'Agosto'},
    {value:9, label:'Setembro'},
]

const year= [
    {value:2019, label:2019},
    {value:2020, label:2020},
    {value:2021, label:2021},
    {value:2022, label:2022}

]

interface IRoute{
  match:{
    params:{
      type: string
    }
  }
}

interface IData{
  id:string
  desciption:string
  formattedAmount:string
  frequency:string
  formattedDate:string
  tagColor:string
}

const List: React.FC<IRoute>= ({match}) => {
  
  const[data, setData] = useState<IData[]>([])
  const[monthSelected, setMonthSelected] = useState<string>(String(new Date().getMonth()+1))
  const[yearSelected, setYearSelected] = useState<string>(String(new Date().getFullYear()))

  const {type } = match.params
   

  const title = useMemo(()=>{
      return type === 'entries'? 'Entradas':'Saídas' 
  },[type])

  const lineColor = useMemo(()=>{
      return type === 'entries'? '#F7931B':'#E44C4E'
  }, [type])

  const listData = useMemo(()=>{
    return type === 'entries'? gains:expenses
},[type])


  useEffect(()=>{
   const filteredData = listData.filter(item=>{
     const date = new Date(item.date)
     const month = String(date.getMonth()+1)
     const year = String(date.getFullYear())

     return(month===monthSelected && year === yearSelected)
   })

   const response =  filteredData.map(item=>{
      return{
        desciption:item.description,
        formattedAmount:formatCurrency(Number(item.amount)),
        frequency:item.frequency,
        formattedDate:formatDate(item.date),
        tagColor:item.frequency==='recorrente'?'#4E41F0':'#E44C4E',
        id: String(new Date().getTime()) + item.amount
      }
    })
    setData(response)
   
  },[listData, monthSelected, yearSelected])


    return(
        <Container>
            <ContentHeader  title={title} lineColor={lineColor}>
                <SelectInputs 
                options={month} 
                onChange={e=>setMonthSelected(e.target.value)}
                defaultValue={monthSelected}
                />
                
                <SelectInputs 
                options={year} 
                onChange={e=>setYearSelected(e.target.value)}
                defaultValue={yearSelected}
                />
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
              {data.map(item=>{
                return(
                  <HistoryFinanceCard
                  tagColor={item.tagColor}
                  title={item.desciption}
                  amount={item.formattedAmount}
                  date={item.formattedDate}
                  key={item.id}
                />
                )
              })}
              
         
            </Content>
        </Container>
    )
}

export default List