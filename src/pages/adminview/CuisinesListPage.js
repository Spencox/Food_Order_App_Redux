import React from "react";
import { Table, Container, Button, Col, Image } from "react-bootstrap";

import AlertMessage from "../../components/AlertMessage";
import AddCuisinePage from "./AddCuisinePage";

const CuisinesListPage = () => {
  const [cuisines, setCuisines] = React.useState(
    JSON.parse(localStorage.getItem("cuisines")) || []
  );
  const deleteHandler = (id) => {
    const cuisinesListUpdated = cuisines.filter(
      (cuisine) => cuisine.id != id
    );
    setCuisines(cuisinesListUpdated);
  };
  const [showCuisine, setShowCuisine] = React.useState(true)

  const handleAddCuisine = (e) => {
    e.preventDefault();
    setShowCuisine(false)
  }

  return (

    <>
      {showCuisine && cuisines.length == 0 && (
        <AlertMessage variant="info" message="No cuisine created" />
      )}
      {showCuisine && cuisines.length > 0 && (
        <Container>
          <Button className="my-3" variant="outline-info" onClick={(e) => handleAddCuisine(e)}>Add cuisine</Button>
          <Table striped hover bordered className="table-sm">
            <thead>
              <tr class="text-center">
                <th>Id</th>
                <th>Cuisine Image</th>
                <th>Cuisine Name</th>
                <th>Cuisine Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cuisines.map((cuisine, index) => (
                <tr key={cuisine.id} class="text-center">
                  <td>{cuisine.id}</td>
                  <td><Image src={cuisine.image} width={80} height={80} /></td>
                  <td>{cuisine.name}</td>
                  <td>{cuisine.description}</td>
                  <td>
                    <Col>
                      <Button variant="info" className="mb-3">
                        Edit
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        variant="danger"
                        className="mb-3"
                        onClick={() => deleteHandler(cuisine.id)}
                      >
                        Delete
                      </Button>
                    </Col>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      )}
      {!showCuisine && <AddCuisinePage />}
    </>
  );
};

export default CuisinesListPage;
