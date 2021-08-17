import React, { Fragment } from 'react'

export const AffichageUtilisateur = (props) => {
    return (
        <Fragment>
            <div style={styles.bloc}>
                <p style={styles.label}>Nom: </p>
                <p style={styles.text}>{props.utilisateur.nom}</p>
            </div>

            <div style={styles.bloc}>
                <p style={styles.label}>Prenom: </p>
                <p style={styles.text}>{props.utilisateur.prenom}</p>
            </div>
        </Fragment>
    )
}

const styles = {
    label: {
        fontWeight: "bold",
        marginLeft: "5px",
        marginRight: "5px"
    },
    text: {
        color: "green"
    },
    bloc: {
        display: "flex",
        flexDirection: "row"
    }
}