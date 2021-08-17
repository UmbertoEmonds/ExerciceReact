import { Component } from "react";
import { Button } from 'primereact/button';

export class ModifierUtilisateurComponent extends Component {
    constructor(){
        super()
        this.state = {
            user: {
                nom: "",
                prenom: ""
            }
        }
    }

    modifierNom = (event) =>{
        this.setState({user: {
            ...this.state.user, nom: event.target.value
        }})
    }

    modifierPrenom = (event) => {
        this.setState({user: {
            ...this.state.user, prenom: event.target.value
        }})
    }

    render(){
        return (
            <div style={style.div}>
                <input onChange={this.modifierNom} defaultValue={this.state.user.nom}></input>
                <input onChange={this.modifierPrenom} defaultValue={this.state.user.prenom}></input>
                <Button label="Valider" icon="pi pi-check" iconPos="right" className="p-button-success" onClick={this.postValue}/>    
            </div>
        )
    }
}

const style = {
    div: {
        display: "flex",
        flexDirection: "column",
        width: "200px"
    }
}