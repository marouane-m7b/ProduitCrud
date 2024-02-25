import React, { useState } from 'react';
import Table from './Table';
let nextId = 1;

function Form({ handleAdd, data, handleUpdate }) {
    let categories = ["Électronique", "Vêtements", "Maison et Jardin", "Sports et Loisirs", "Beauté et Santé", "Alimentation", "Auto et Moto", "Informatique", "Livres", "Jouets"];

    const [isUpdating, setIsUpdating] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.filter(item => {
        return (
            item.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.categorie.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    const [formInputs, setFormInputs] = useState({
        id: "",
        nom: "",
        description: "",
        prix: "",
        date: "",
        categorie: "",
    });

    function handleEdit(product) {
        if (window.confirm(`Etes-vous sur de vouloir modifier le produit avec id : ${product.id} ?`)) {
            setFormInputs(product);
            setIsUpdating(true);
        }
    }

    function EditProduct(e) {
        e.preventDefault();
        if (formInputs.nom.length < 3 || formInputs.nom.length > 20) {
            alert("Le nom doit avoir entre 3 et 20 caractères");
            return;
        }
        if (formInputs.description.length < 3 || formInputs.description.length > 200) {
            alert("La description doit avoir entre 3 et 200 caractères");
            return;
        }
        if (formInputs.prix < 1 || formInputs.prix.length > 100000) {
            alert("Le prix doit avoir entre 1 et 100000");
            return;
        }
        if (formInputs.date < getTodayDate() || formInputs.date > "2040-12-31") {
            alert("La date doit avoir entre aujourd'hui et 2040-12-31");
            return;
        }
        handleUpdate(formInputs);
        setIsUpdating(false);
    }

    function getTodayDate() {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    function AddProduct(e) {
        e.preventDefault();
        if (formInputs.nom.length < 3 || formInputs.nom.length > 20) {
            alert("Le nom doit avoir entre 3 et 20 caractères");
            return;
        }
        if (formInputs.description.length < 3 || formInputs.description.length > 200) {
            alert("La description doit avoir entre 3 et 200 caractères");
            return;
        }
        if (formInputs.prix < 1 || formInputs.prix.length > 100000) {
            alert("Le prix doit avoir entre 1 et 100000");
            return;
        }
        if (formInputs.date < getTodayDate() || formInputs.date > "2040-12-31") {
            alert("La date doit avoir entre aujourd'hui et 2040-12-31");
            return;
        }
        handleAdd({ ...formInputs, id: nextId });
        nextId = nextId + 1;
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
                <select value={formInputs.categorie} onChange={(e) => setFormInputs({ ...formInputs, categorie: e.target.value })}>
                    <option value="">Categorie</option>
                    {categories.map((item, key) => (
                        <option key={key}>{item}</option>
                    ))}
                </select>
                {!isUpdating
                    ? <button onClick={AddProduct} disabled={formInputs.nom === "" || formInputs.description === "" || formInputs.prix === "" || formInputs.date === "" || formInputs.categorie === ""}><b>Ajouter</b></button>
                    : <button onClick={EditProduct} disabled={formInputs.nom === "" || formInputs.description === "" || formInputs.prix === "" || formInputs.date === "" || formInputs.categorie === ""}><b>Modifier</b></button>}
            </form>
            <input type="text" placeholder="Rechercher" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            {!isUpdating && <Table data={filteredData} handleEdit={handleEdit} />}
        </>
    );
}

export default Form;
