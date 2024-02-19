import React from "react";
import { Table, Container, Button, Col, Image } from "react-bootstrap";

import AlertMessage from "../../components/AlertMessage";
import AddRestaurantPage from "./AddRestaurantPage";

const RestaurantsListPage = () => {
  const [restaurants, setRestaurants] = React.useState(
    JSON.parse(localStorage.getItem("restaurants")) || []
  );
  const deleteHandler = (id) => {
    const restaurantsListUpdated = restaurants.filter(
      (restaurant) => restaurant.id != id
    );
    setRestaurants(restaurantsListUpdated);
  };
  const [showRestaurant, setShowRestaurant] = React.useState(true)

  const handleAddRestaurant = (e) => {
    e.preventDefault();
    setShowRestaurant(false)
  }

  return (

    <>
      {showRestaurant && restaurants.length == 0 && (
        <AlertMessage variant="info" message="No restaurant created" />
      )}
      {showRestaurant && restaurants.length > 0 && (
        <Container>
          {/* <LinkContainer to="/admin/restaurant/new"> */}
          <Button className="my-3" variant="outline-info" onClick={(e) => handleAddRestaurant(e)}>Add Restaurant</Button>
          {/* </LinkContainer> */}
          <Table striped hover bordered className="table-sm">
            <thead>
              <tr class="text-center">
                <th>Id</th>
                <th>Restaurant Image</th>
                <th>Restaurant Name</th>
                <th>Restaurant Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {restaurants.map((restaurant, index) => (
                <tr key={restaurant.id} class="text-center">
                  <td>{restaurant.id}</td>
                  <td><Image src={restaurant.image} width={80} height={80} /></td>
                  <td>{restaurant.name}</td>
                  <td>{restaurant.address}</td>
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
                        onClick={() => deleteHandler(restaurant.id)}
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
      {!showRestaurant && <AddRestaurantPage />}
    </>
  );
};

export default RestaurantsListPage;
