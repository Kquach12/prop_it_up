import React, {useState} from 'react'

const Person = (props)=> {
    const [weight, setWeight] = useState(props.initialWeight)
    return (
        <div>
            <h2>{props.lastName}, {props.firstName}</h2>
            <p>Age: {props.age}</p>
            <p>Hair color: {props.hairColor}</p>
            <p>Weight: {weight}</p>
            <button onClick = {(event) => setWeight(weight - 1)}>Lose Weight</button>
        </div>
    )
}

export default Person