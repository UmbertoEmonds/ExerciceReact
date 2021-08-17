import React, {Component} from 'react'
import { Button } from 'primereact/button';

export class FirstComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            compteur: 0
            
        }
    }

    render(){
        return (
            <div>
                <h1>Compteur: {this.state.compteur}</h1>
                <h1>Je m'apelle {this.props.nom}</h1>
                <Button label="Incrémenter le compteur" onClick={() => this.setState({compteur: this.state.compteur+1})}></Button>
            </div>
        )
    }
}