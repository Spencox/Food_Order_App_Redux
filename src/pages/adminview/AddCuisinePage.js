import React from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import AlertMessage from "../../components/AlertMessage";
import CuisinesListPage from "./CuisinesListPage";

const AddCuisinePage = () => {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageData, setImageData] = React.useState("");
  const [error, setError] = React.useState(false);
  const [success, setSuccess] = React.useState("");

  const handleNameChange = (e) => {
    setError("");
    setSuccess("");
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setError("");
    setSuccess("");
    setDescription(e.target.value);
  };
  const handleImageDataChange = (e) => {
    setError("");
    setSuccess("");
    setImageData(e.target.value);
  };

  const addCuisineHandler = (e) => {
    e.preventDefault();
    const cuisines = JSON.parse(localStorage.getItem("cuisines")) || [];

    const cuisine = {
      id: cuisines.length + 1,
      name: name,
      description: description,
      image: imageData
    };

    cuisines.push(cuisine);
    localStorage.setItem("cuisines", JSON.stringify(cuisines));

    setSuccess("cuisine is added successfully");

  };

  const [addCuisine, setAddCuisine] = React.useState(true);

  const handleCuisineList = (e) => {
    e.preventDefault();
    setAddCuisine(false);
  };

  return (
    <>
      {addCuisine && (
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
            onClick={(e) => handleCuisineList(e)}
          >
            View cuisines
          </Button>
          <Form className="mb-0 rounded p-4 bg-light" border="primary" name="addCuisineForm" id="addCuisineForm">
            <Form.Group controlId="name" className="mb-3">
              <Form.Label htmlFor="cuisineName">Cuisine Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cuisine Name"
                value={name}
                id="cuisineName"
                name="cuisineName"
                onChange={(e) => handleNameChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label htmlFor="cuisineDesc">Cuisine Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Cuisine Description"
                value={description}
                id="cuisineDesc"
                name="cuisineDesc"
                onChange={(e) => handleDescriptionChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label htmlFor="cuisineImage">Cuisine Image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Cuisine Image"
                value={imageData}
                id="cuisineImage"
                name="cuisineImage"
                onChange={(e) => handleImageDataChange(e)}
              />
            </Form.Group>

            <Button
              type="submit"
              variant="info"
              className="mb-3"
              onClick={addCuisineHandler}
            >
              Add cuisine
            </Button>
          </Form>
        </Container>
      )}
      {!addCuisine && <CuisinesListPage />}
    </>
  );
};

export default AddCuisinePage;
