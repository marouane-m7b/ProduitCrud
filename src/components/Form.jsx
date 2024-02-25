import React, { useState } from 'react';
import Table from './Table';

function Form({ data, handleAdd, handleDelete, handleUpdate }) {
    let categories = ["Électronique", "Vêtements", "Maison et Jardin", "Sports et Loisirs", "Beauté et Santé", "Alimentation", "Auto et Moto", "Informatique", "Livres", "Jouets"];

    const [formInputs, setFormInputs] = useState({
        id: "",
        nom: "",
        description: "",
        prix: "",
        date: "",
        categorie: ""
    })
    const [isUpdating, setIsUpdating] = useState(false)
    const [nextId, setNextId] = useState(1)

    function Aujourdhui() {
        const today = new Date()
        const annee = today.getFullYear()
        const mois = String(today.getMonth() + 1).padStart(2, "0")
        const jour = String(today.getDate()).padStart(2, "0")
        return `${annee}-${mois}-${jour}`
    }

    function AddProduct(e) {
        e.preventDefault();
        if (formInputs.nom.length < 3 || formInputs.nom.length > 20) {
            alert('nom: entre 3 et 20')
            return
        }
        if (formInputs.description.length < 3 || formInputs.description.length > 120) {
            alert('description: entre 3 et 120')
            return
        }
        if (formInputs.prix < 1 || formInputs.prix.length > 10000) {
            alert('prix: entre 1 et 10000')
            return
        }
        if (formInputs.date < Aujourdhui() || formInputs.date > '2030-12-31') {
            alert(`date: entre aujourd'hui et 2030-12-31`)
            return
        }
        handleAdd({ ...formInputs, id: nextId });
        setNextId(nextId + 1)
    }

    function handleEdit(produit) {
        if (window.confirm(`modifier produit avec id ${produit.id}`)) {
            setFormInputs(produit)
            setIsUpdating(true)
        }
    }

    function EditProduit(e) {
        e.preventDefault();
        if (formInputs.nom.length < 3 || formInputs.nom.length > 20) {
            alert('nom: entre 3 et 20')
            return
        }
        if (formInputs.description.length < 3 || formInputs.description.length > 120) {
            alert('description: entre 3 et 120')
            return
        }
        if (formInputs.prix < 1 || formInputs.prix.length > 10000) {
            alert('prix: entre 1 et 10000')
            return
        }
        if (formInputs.date < Aujourdhui() || formInputs.date > '2030-12-31') {
            alert(`date: entre aujourd'hui et 2030-12-31`)
            return
        }
        handleUpdate(formInputs)
        setIsUpdating(false);
    }

    return (
        <>
            <h1>Produit</h1>
            <form>
                <label>Nom : </label>
                <input type="text" value={formInputs.nom} onChange={(e) => setFormInputs({ ...formInputs, nom: e.target.value })} />
                <label>Description : </label>
                <textarea type="text" value={formInputs.description} onChange={(e) => setFormInputs({ ...formInputs, description: e.target.value })} />
                <label>Prix : </label>
                <input type="number" value={formInputs.prix} onChange={(e) => setFormInputs({ ...formInputs, prix: e.target.value })} />
                <label>Date d'experation : </label>
                <input type="date" value={formInputs.date} onChange={(e) => setFormInputs({ ...formInputs, date: e.target.value })} />
                <label>Catégorie : </label>
                <select value={formInputs.categorie} onChange={(e) => setFormInputs({ ...formInputs, categorie: e.target.value })}  >
                    <option value="">Categorie</option>
                    {categories.map((item, key) => (
                        <option value={item} key={key}>{item}</option>
                    ))}
                </select>
                {isUpdating
                    ? <button onClick={EditProduit} disabled={formInputs.nom === "" || formInputs.description === "" || formInputs.prix === "" || formInputs.date === "" || formInputs.categorie === ""}>Modifier</button>
                    : <button onClick={AddProduct} disabled={formInputs.nom === "" || formInputs.description === "" || formInputs.prix === "" || formInputs.date === "" || formInputs.categorie === ""}>Ajouter</button>}
            </form>

            {!isUpdating && <Table data={data} handleDelete={handleDelete} handleEdit={handleEdit} />}
        </>
    );
}

export default Form;


