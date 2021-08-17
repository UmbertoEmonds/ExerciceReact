import './App.css';
import { Component, React } from 'react';
import { Button } from 'primereact/button';
import { Utilisateurs } from './features/components/Utilisateurs';


class App extends Component{

  constructor(){
    super()
    this.state = {
      user: {
          nom: "",
          prenom: ""
      }
  }
  }

  render() {

    return (
      <div style={style.div}>
  
        <p style={style.paragraphe}>Bonjour et bienvenue sur mon premier projet en <b>React</b></p>
        <p style={style.paragraphe}>Vas-tu te faire vacciner ?</p>
        
        <div id="btnContainer" style={style.btnContainer}>
          <Button label="Oui" icon="pi pi-check" iconPos="right" className="p-button-success" style={style.globalBtn}/>
          <Button label="Non" icon="pi pi-times" iconPos="right" className="p-button-danger" style={style.globalBtn}/>
        </div>
  
        <Utilisateurs/>
      </div>
    ) 
  }
}

// raccourcir la recuperation des props dans un composant fonction, pas de state, pas de this
/*const ComposantFonction = ({incrementer, texte}) => {
  <p>{texte}</p>
}*/

export const style = {
  paragraphe: {
    textAlign: "center",
    margin: "0"
  },
  globalBtn: {
    width: "150px",
    margin: "10px"
  },
  btnContainer: {
    display:  "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  div: {
    marginTop: "3%"
  }
}

export default App;