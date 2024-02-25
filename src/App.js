import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

const App = () => {
  const [data, setData] = useState([
    // {id: 17,nom: "Ordinateur portable Dell XPS 13",description: "Puissant ordinateur portable avec écran tactile",prix: 1200,date: "2024-02-24",categorie: "Informatique", },
    // {id: 18,nom: "Smartphone Samsung Galaxy S22",description: "Dernier smartphone avec caméra haute résolution",prix: 900,date: "2024-02-25",categorie: "Téléphonie", },
    // {id: 19,nom: "Caméra Sony Alpha A7 III",description: "Caméra professionnelle pour les photographes",prix: 1500,date: "2024-02-26",categorie: "Photographie", },
    // {id: 20,nom: "Téléviseur LG OLED CX",description: "Écran OLED avec qualité d'image exceptionnelle",prix: 2000,date: "2024-02-27",categorie: "Électronique grand public", },
    // {id: 21,nom: "Montre connectée Apple Watch Series 7",description: "Suivi de la condition physique et des notifications intelligentes",prix: 400,date: "2024-02-28",categorie: "Accessoires électroniques", },
    // {id: 22,nom: "Console de jeux Sony PlayStation 5",description: "Console de nouvelle génération avec graphismes haute définition",prix: 500,date: "2024-02-29",categorie: "Jeux vidéo", },
    // {id: 23,nom: "Livre 'Le Seigneur des Anneaux'",description: "Chef-d'œuvre de la littérature fantastique",prix: 30,date: "2024-03-01",categorie: "Littérature", },
    // {id: 24,nom: "Cafetière automatique Philips",description: "Préparez du café frais avec facilité",prix: 80,date: "2024-03-02",categorie: "Électroménager", },
    // {id: 25,nom: "Sac à dos North Face",description: "Sac résistant à l'eau pour les amateurs de plein air",prix: 70,date: "2024-03-03",categorie: "Accessoires de voyage", },
    // {id: 26,nom: "Enceinte Bluetooth JBL Charge 5",description: "Haut-parleur portable avec une excellente qualité sonore",prix: 150,date: "2024-03-04",categorie: "Audio", },
  ]);

  function handleAdd(newProduct) {
    setData([...data, newProduct]);
  }

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
  }

  function handleUpdate(inputs) {
    setData(
      data.map((item) => {
        if (item.id === inputs.id) {
          return { ...inputs };
        } else {
          return item;
        }
      })
    );
  }

  return (
    <div className="App">
      <Form
        data={data}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
      />
    </div>
  );
};

export default App;
