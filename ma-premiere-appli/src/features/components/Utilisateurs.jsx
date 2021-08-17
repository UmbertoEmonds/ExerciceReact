import React, { Fragment, useState } from 'react'
import { AffichageUtilisateur } from './AffichageUtilisateur'
import { ModificationUtilisateur } from './ModificationUtilisateur'

export const Utilisateurs = () => {

    const [utilisateur, setUtilisateur] = useState({
        nom: "Emonds",
        prenom: "Umberto"
    })

    return (
        <Fragment>  
            <AffichageUtilisateur utilisateur={utilisateur}/>
            <ModificationUtilisateur setUtilisateur={setUtilisateur} utilisateur={utilisateur}/>
        </Fragment>
    )
}