//Array
//last
//makeArr
//addFullName
//interfaces
//props
//useState
//jsx generic

///GENERICS

///////////////ARRAY
const last = (arr: Array<number>) =>{
    return arr[arr.length-1]
}

const l = last([1,2,3])

const first = <T>(arr:T[]) =>{
    return arr 
}
// it will return the type (generics)=/= any

const v3 = first<string|null>(["a",null])

///////////////OBJECT
const makeFullName = (obj:{firstName:string, lastName:string}) =>{
    return {
        ...obj,
        fullName:obj.firstName + "" + obj.lastName
    }
}

const Person = <Generic extends {firstName:string; lastName:string}>(obj:Generic) =>{
    return {
        ...obj,
        fullname:obj.firstName + "" + obj.lastName

    }
}


////////React
/*
import React from 'react'

const Aapp: React.FC = () =>{
    return()
}

*/

/// Passando uma prop

/*
1.
import React from 'react'

const Aapp: React.FC<{tect:string}>= () =>{
    return()
}

2.
interface Props {
    text:string;
    ok?: boolean;     optional 
    func: (bob:string) => string;
    func: () => void
}

const App: React.FC<Props> = ({text}) =>{
    return()
}

*/


/* HOOKS

const [data, setData] = useState<number | null>(5)


*/