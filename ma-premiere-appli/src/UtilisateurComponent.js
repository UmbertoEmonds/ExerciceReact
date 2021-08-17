import { Component } from "react";
import { ModifierUtilisateurComponent } from "./ModifierUtilisateurComponent";

export class UtilisateurComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            user: {
                nom: "",
                prenom: ""
            }
        }
    }
    render(){
        return (
            <div>
                <p>Nom: {this.props.user.nom}</p>
                <p>Prenom: {this.props.user.prenom}</p>

                <ModifierUtilisateurComponent styme={style.modifUser}/>
            </div>
        )
    }
}

const style = {
    modifUser: {
        display: "flex",
        flexDirection: "column"
    }
}