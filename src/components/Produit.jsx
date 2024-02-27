import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AppContext } from '../contexts/AppContext'

function Produit() {

    const { id } = useParams()
    const { data } = useContext(AppContext)
    const [produit, setProduit] = useState({})

    useEffect(() => {
        setProduit(data.find((item) => item.id == id) || {})
    }, [data, id])

    if (!produit) {
        return (<h1>Produit Not Found</h1>)
    }

    return (
        <>
            <Link to={"/"}><button>Home</button></Link>
            <h1>Nom: {produit.nom}</h1>
            <h1>Description: {produit.description}</h1>
            <h1>Categorie: {produit.categorie}</h1>
            <h1>Prix: {produit.prix}</h1>
            <h1>Date: {produit.date}</h1>
        </>
    )
}

export default Produit