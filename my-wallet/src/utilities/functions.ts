export const formatCurrency = (current:number):string =>{
    return current.toLocaleString(
        'pt-br',
    {
        style:'currency',
        currency:'BRL'
    }
    )
}

export const formatDate = (date:string):string =>{
    const formattedDate = new Date(date)
    const day = formattedDate.getDate() > 9? 
    formattedDate.getDate() :
     `0${formattedDate.getDate()}`

    const month = formattedDate.getMonth()>8?
    formattedDate.getMonth()+1:
    `0${formattedDate.getMonth()+1}`
    const year = formattedDate.getFullYear()

    return`${day}/${month}/${year}`
}