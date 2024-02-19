import React from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import AlertMessage from "../../components/AlertMessage";
import RestaurantsListPage from "./RestaurantsListPage";

const AddRestaurantPage = () => {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [imageData, setImageData] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const handleNameChange = (e) => {
    setError("");
    setSuccess("");
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setError("");
    setSuccess("");
    setAddress(e.target.value);
  };
  const handleImageDataChange = (e) => {
    setError("");
    setSuccess("");
    setImageData(e.target.value);
  };

  const addRestaurantHandler = (e) => {
    e.preventDefault();
    const restaurants = JSON.parse(localStorage.getItem("restaurants")) || [];

    const restaurant = {
      id: restaurants.length + 1,
      name: name,
      address: address,
      image: imageData
    };

    restaurants.push(restaurant);
    localStorage.setItem("restaurants", JSON.stringify(restaurants));

    setSuccess("restaurant is added successfully");
  };

  const [addRestaurant, setAddRestaurant] = React.useState(true);

  const handleRestaurantList = (e) => {
    e.preventDefault();
    setAddRestaurant(false);
  };

  return (
    <>
      {addRestaurant && (
        <Container>
          {error && <AlertMessage variant="danger" message={error} />}
          {success && <AlertMessage variant="success" message={success} />}
          {imageData && (
            <div className="text-center">
              <Image src={imageData} width={200} height={200} rounded></Image>
            </div>
          )}

          <Button
            variant="outline-info"
            className="my-3"
            onClick={(e) => handleRestaurantList(e)}
          >
            View restaurants
          </Button>
          <Form className="mb-0 rounded p-4 bg-light" border="primary" name="addRestaurantForm" id="addRestaurantForm">
            <Form.Group controlId="name" className="mb-3">
              <Form.Label htmlFor="restaurantName">Restaurant Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Restaurant Name"
                value={name}
                id="restaurantName"
                name="restaurantName"
                onChange={(e) => handleNameChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label htmlFor="restaurantAddr">Restaurant Address</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Restaurant Address"
                value={address}
                id="restaurantAddr"
                name="restaurantAddr"
                onChange={(e) => handleAddressChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label htmlFor="restaurantImage">Restaurant Image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Restaurant Image"
                value={imageData}
                id="restaurantImage"
                name="restaurantImage"
                onChange={(e) => handleImageDataChange(e)}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="info"
              className="mb-3"
              onClick={addRestaurantHandler}
            >
              Add restaurant
            </Button>
          </Form>
        </Container>
      )}
      {!addRestaurant && <RestaurantsListPage />}
    </>
  );
};

export default AddRestaurantPage;
