import React, {useState} from 'react'

const Person = (props)=> {
    const [weight, setWeight] = useState(props.initialWeight)
    const [age, setAge] = useState(props.age)
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair color: {props.hairColor}</p>
            <p>Weight: {weight}</p>
            <button onClick = {(event) => setWeight(weight - 1)}>Lose Weight</button> 
            <br/>
            <button onClick = {(event) => setAge(age+1)}>It's your birthday!</button>
        </div>
    )
}

export default Person