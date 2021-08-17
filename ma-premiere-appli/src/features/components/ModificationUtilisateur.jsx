import React, { useState } from 'react'
import { InputText } from 'primereact/inputtext';

export const ModificationUtilisateur = (props) => {

    const [utilisateurNew, setUtilisateurNew] = useState({
        nom: props.utilisateur.nom,
        prenom: props.utilisateur.prenom
    })

    const handleClickValidate = () => {
        props.setUtilisateur(utilisateurNew)
    }

    const handleChangeNom = (event) => {
        setUtilisateurNew({...utilisateurNew, nom: event.target.value})
    }
    
    const handleChangePrenom = (event) => {
        setUtilisateurNew({...utilisateurNew, prenom: event.target.value})
    }

    return (
        <div style={style.div}>
            <InputText style={style.textAera} id="nom" placeholder="Nom" autoComplete="off" onChange={(event) => handleChangeNom(event)} />
            <InputText style={style.textAera} id="prenom" placeholder="Prénom" autoComplete="off" onChange={(event) => handleChangePrenom(event)} />

            <button onClick={handleClickValidate}>Modifier</button>
        </div>
    )
}

const style = {
    div: {
        display: "flex",
        flexDirection: "column",
        width: "30%",
        alignItems: "center"
    },
    textAera: {
        margin: "5px"
    }
}