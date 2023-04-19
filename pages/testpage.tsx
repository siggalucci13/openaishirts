import {useState} from 'react'
function test (){

    const [data, setdata] = useState([])
    const test = async () => {
        const response = await fetch(`http://localhost:3000/api/openAI?query=hello dog`)
        const data = await response.json()
        setdata(data)
        console.log(data)
    }
    return(
        <div>
            <button onClick={test}>test</button>
            {data}
        </div>
    )
}
export default test