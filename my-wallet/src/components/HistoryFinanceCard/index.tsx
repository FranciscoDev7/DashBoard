import React from 'react'
import { Container, Tag, TextContainer } from './styles'


interface IHystoryFinanceCard {
    
    tagColor:string
    title:string
    date:string
    amount:string
}

const HistoryFinanceCard: React.FC<IHystoryFinanceCard>= ({
    
    tagColor,
    title,
    date,
    amount
}) => {

    return (
        <Container >
            <Tag color={tagColor}/>
            <TextContainer>
                <span>{title}</span>
                <small>{date}</small>
            </TextContainer>
            <h3>{amount}</h3>
        </Container>
    )
}

export default HistoryFinanceCard
