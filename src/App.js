import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { AppContext } from "./contexts/AppContext";
import { Route, Routes } from "react-router-dom";
import Produit from "./components/Produit";

const App = () => {
  const [data, setData] = useState([
    // { id: 1, nom: "produit 1", description: "description 1", prix: 1, date: "2022-01-01", categorie: "Categorie 1" },
    // { id: 2, nom: "produit 3", description: "description 2", prix: 2, date: "2022-01-02", categorie: "Categorie 2" },
    // { id: 3, nom: "produit 2", description: "description 3", prix: 3, date: "2022-01-03", categorie: "Categorie 3" },
    // { id: 4, nom: "produit 4", description: "description 4", prix: 4, date: "2022-01-04", categorie: "Categorie 4" },
    // { id: 5, nom: "produit 5", description: "description 5", prix: 5, date: "2022-01-05", categorie: "Categorie 5" },
    // { id: 6, nom: "produit 6", description: "description 6", prix: 6, date: "2022-01-06", categorie: "Categorie 6" },
    // { id: 7, nom: "produit 7", description: "description 7", prix: 7, date: "2022-01-07", categorie: "Categorie 7" },
    // { id: 8, nom: "produit 8", description: "description 8", prix: 8, date: "2022-01-08", categorie: "Categorie 8" },
    // { id: 9, nom: "produit 9", description: "description 9", prix: 9, date: "2022-01-09", categorie: "Categorie 9" },
    // { id: 10, nom: "produit 10", description: "description 10", prix: 10, date: "2022-01-10", categorie: "Categorie 10" },
    // { id: 11, nom: "produit 11", description: "description 11", prix: 11, date: "2022-01-11", categorie: "Categorie 11" },
    // { id: 12, nom: "produit 12", description: "description 12", prix: 12, date: "2022-01-12", categorie: "Categorie 12" },
    // { id: 13, nom: "produit 13", description: "description 13", prix: 13, date: "2022-01-13", categorie: "Categorie 13" },
    // { id: 14, nom: "produit 14", description: "description 14", prix: 14, date: "2022-01-14", categorie: "Categorie 14" },
    // { id: 15, nom: "produit 15", description: "description 15", prix: 15, date: "2022-01-15", categorie: "Categorie 15" },
    // { id: 16, nom: "produit 16", description: "description 16", prix: 16, date: "2022-01-16", categorie: "Categorie 16" },
  ]);

  useEffect(() => {
    if (localStorage.getItem("data")) {
      setData(JSON.parse(localStorage.getItem("data")));
    }
  }, []);

  function handleAdd(newProduct) {
    setData([...data, newProduct]);
    localStorage.setItem("data", JSON.stringify([...data, newProduct]));
  }

  function handleDelete(id) {
    setData(data.filter((item) => item.id !== id));
    localStorage.setItem(
      "data",
      JSON.stringify(data.filter((item) => item.id !== id))
    );
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
    localStorage.setItem(
      "data",
      JSON.stringify(
        data.map((item) => {
          if (item.id === inputs.id) {
            return { ...inputs };
          } else {
            return item;
          }
        })
      )
    );
  }

  return (
    <AppContext.Provider value={{ handleDelete: handleDelete, data: data }}>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Form
                handleAdd={handleAdd}
                data={data}
                handleUpdate={handleUpdate}
              />
            }
          />
          <Route path="/:id" element={<Produit />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
};

export default App;
