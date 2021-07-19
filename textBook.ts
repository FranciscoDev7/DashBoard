
/* 1. OS tipos de variavel TypeScript sao:
string
number
boolean
*/

const myNameText:string = "Junior"
let lastNumber:number = 25
let isCorrect:boolean = true

const fruits: string[] = []

fruits.push("banana")

const drinks: Array<string> = ["beer", "vodka"]

interface IPerson{
    name: string
    age:number
}

const student: IPerson ={
    name:"Jeff",
    age:35
}

/* Component

const myComponent: React.FC = () => {

}

export default myComponent
*/
//----------- Intarface

interface Ifood{
    name:string,
    weight:number,
    isSweet:boolean
}

//------- Props
// You create a prop interface for the child component
//when is not mandatory, you have to use a question mark
// you can pass a function inside a prop as well

interface Props {
    task?:number;
    volume:number;
    myFunction():void
}

//Event Ex:HTMLInputElement


//Func

const myFunction = (input: string):void => {
      
}

// State

//const [myState, setMyState] = useState<number>(0)
//const [data, setData] = useState<iData[]>([])
