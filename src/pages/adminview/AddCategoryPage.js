import React from "react";
import { Container, Form, Button, Image } from "react-bootstrap";
import AlertMessage from "../../components/AlertMessage";
import CategoriesListPage from "./CategoriesListPage";

const AddCategoryPage = () => {
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

  const addCategoryHandler = (e) => {
    e.preventDefault();
    const categories = JSON.parse(localStorage.getItem("categories")) || [];

    const category = {
      id: categories.length + 1,
      name: name,
      description: description,
      image: imageData
    };

    categories.push(category);
    localStorage.setItem("categories", JSON.stringify(categories));

    setSuccess("category is added successfully");
  };

  const [addCategory, setAddCategory] = React.useState(true);

  const handleCategoryList = (e) => {
    e.preventDefault();
    setAddCategory(false);
  };

  return (
    <>

      {addCategory && (
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
            onClick={(e) => handleCategoryList(e)}
          >
            View categories
          </Button>
          <Form className="mb-0 rounded p-4 bg-light" border="primary" name="addCategoryForm" id="addCategoryForm">
            <Form.Group controlId="name" className="mb-3">
              <Form.Label htmlFor="categoryName">Category Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Category Name"
                value={name}
                id="categoryName"
                name="categoryName"
                onChange={(e) => handleNameChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label htmlFor="categoryDesc">Category Description</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Category Description"
                value={description}
                id="categoryDesc"
                name="categoryDesc"
                onChange={(e) => handleDescriptionChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="description" className="mb-3">
              <Form.Label htmlFor="categoryImage">Category Image</Form.Label>
              <Form.Control
                type="url"
                placeholder="Category Image"
                value={imageData}
                id="categoryImage"
                name="categoryImage"
                onChange={(e) => handleImageDataChange(e)}
              />
            </Form.Group>
            <Button
              type="submit"
              variant="info"
              className="mb-3"
              onClick={addCategoryHandler}
            >
              Add category
            </Button>
          </Form>
        </Container>
      )}
      {!addCategory && <CategoriesListPage />}
    </>
  );
};

export default AddCategoryPage;