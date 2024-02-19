import React from "react";
import { Table, Container, Button, Col, Image } from "react-bootstrap";

import AlertMessage from "../../components/AlertMessage";
import AddCategoryPage from "./AddCategoryPage";

const CategoriesListPage = () => {
  const [categories, setCategories] = React.useState(
    JSON.parse(localStorage.getItem("categories")) || []
  );
  const deleteHandler = (id) => {
    const categoriesListUpdated = categories.filter(
      (category) => category.id != id
    );
    setCategories(categoriesListUpdated);
  };
  const [showCategory, setShowCategory] = React.useState(true)

  const handleAddCategory = (e) => {
    e.preventDefault();
    setShowCategory(false)
  }

  return (

    <>
      {showCategory && categories.length == 0 && (
        <AlertMessage variant="info" message="No category created" />
      )}
      {showCategory && categories.length > 0 && (
        <Container>
          {/* <LinkContainer to="/admin/category/new"> */}
          <Button className="my-3" variant="outline-info" onClick={(e) => handleAddCategory(e)}>Add Category</Button>
          {/* </LinkContainer> */}
          <Table striped hover bordered className="table-sm">
            <thead>
              <tr class="text-center">
                <th>Id</th>
                <th>Category Image</th>
                <th>Category Name</th>
                <th>Category Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={category.id} class="text-center">
                  <td>{category.id}</td>
                  <td><Image src={category.image} width={80} height={80} /></td>
                  <td>{category.name}</td>
                  <td>{category.description}</td>
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
                        onClick={() => deleteHandler(category.id)}
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
      {!showCategory && <AddCategoryPage />}
    </>
  );
};

export default CategoriesListPage;
