import React, { useContext, useState } from 'react'
import { AppContext } from '../contexts/AppContext';
import { Link } from 'react-router-dom';

function Table({ data, handleEdit }) {

  const myContext = useContext(AppContext)
  const handleDelete = myContext.handleDelete


  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = data.slice(startIndex, endIndex);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Prix</th>
            <th>Date</th>
            <th>Categorie</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{paginatedData.map((item, key) => {
          return (
            <tr key={key}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.description}</td>
              <td>{item.prix}</td>
              <td>{item.date}</td>
              <td>{item.categorie}</td>
              <td>
                <button style={{ backgroundColor: '#ff008e' }} onClick={() => handleDelete(item.id)}>Supprimer</button>
                <button style={{ backgroundColor: '#00c5ff' }} onClick={() => handleEdit(item)}>Modifier</button>
                <Link to={`/${item.id}`}><button>Afficher</button></Link>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
      <div>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages || totalPages === 0}>Next</button>
      </div></>
  )
}

export default Table