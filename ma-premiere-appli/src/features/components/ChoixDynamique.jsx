import React from 'react'

const obj = {
    premier(props){
        return <div>Nom: {props.val}</div>
    },
    second(props){
        return <div>Prenom: {props.val}</div>
    }
}

export const ChoixDynamique = (props) => {

    const Choice = obj[props.type]

    return <Choice val={props.val}/>
}
