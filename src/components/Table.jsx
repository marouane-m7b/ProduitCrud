
function Table({ data, handleDelete, handleEdit }) {
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
        <tbody>
          {data.map((item, key) => {
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
                </td>
              </tr>
            )
          })}
        </tbody>
      </table >
    </>
  )
}

export default Table