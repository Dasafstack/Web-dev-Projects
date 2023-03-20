import React from 'react'
import Info from './info.jsx'
import {nanoid} from 'nanoid'

export default function Question(){
    const [Apidata,datachange]=React.useState([])
    const [count,setcount]=React.useState(1)
    const [show,setShow]=React.useState(false)
    const [resetShow,reset]=React.useState(false)

    React.useEffect(function(){
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res=>res.json())
        .then(data=>handleData(data.results))
    },[count])

    function handleData(data){
        let dataList=[]
        
        for(let el of data){
            const {question,correct_answer,incorrect_answers}=el
            incorrect_answers.push(correct_answer)
            dataList.push({
                'id':nanoid(),
                'Question':question,
                'Answer':correct_answer,
                'Options':incorrect_answers.sort((a, b) => 0.5 - Math.random())
            })
        }
        datachange(dataList)
    }

    function inc(){
        setcount(count+1)
        reset(!resetShow)
        setShow(false)
    }
    
    let elements=Apidata.map((data)=>
        <Info key={data.id} obje={data} show={show}/>)

    function handleSubmit(){
        reset(!resetShow)
        setShow(true)
    }
    

    return (
    <div className="question-page">
        <img id="pic1" src="/bloba.png"/>
        <div className="question">
            {elements}
        </div>
        {!resetShow &&
        <div  className="check-answer fade"> <button className="check-buttons" onClick={handleSubmit}>Check Answer</button>
        </div>}
        {resetShow && <div className="question-reset">
            {/* <p>You scored /5 correct answer</p> */}
            <button className="check-buttons fade" onClick={()=>inc()}>Play Again</button>
        </div>}
        <img id="pic2" src="/blobb.png"/>
    </div>
)
}