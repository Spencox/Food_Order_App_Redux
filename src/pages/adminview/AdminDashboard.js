import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import AddCuisinePage from "./AddCuisinePage";
import CuisinesListPage from "./CuisinesListPage";
import AddCategoryPage from "./AddCategoryPage";
import CategoriesListPage from "./CategoriesListPage";
import AddRestaurantPage from "./AddRestaurantPage";
import RestaurantsListPage from "./RestaurantsListPage";

const AdminDashboard = () => {
    const [showCuisinesList, setShowCuisinesList] = React.useState(false);
    const [addCuisine, setAddCuisine] = React.useState(false);
    const [showCategoriesList, setShowCategoriesList] = React.useState(false);
    const [addCategory, setAddCategory] = React.useState(false);
    const [showRestaurantsList, setShowRestaurantsList] = React.useState(false);
    const [addRestaurant, setAddRestaurant] = React.useState(false);
    const setAllState = () => {
        setAddCuisine(false);
        setAddCategory(false);
        setAddRestaurant(false);
        setShowCuisinesList(false);
        setShowCategoriesList(false);
        setShowRestaurantsList(false);
    }
    const handleAddCuisine = (e) => {
        e.preventDefault();
        setAllState();
        setAddCuisine(true);
    };
    const handleShowCusinesList = (e) => {
        e.preventDefault();
        setAllState();
        setShowCuisinesList(true);
    }
    const handleAddCategory = (e) => {
        e.preventDefault();
        setAllState();
        setAddCategory(true);
    };
    const handleShowCategoriesList = (e) => {
        e.preventDefault();
        setAllState();
        setShowCategoriesList(true);
    };
    const handleAddRestaurant = (e) => {
        e.preventDefault();
        setAllState();
        setAddRestaurant(true);
    };
    const handleShowRestaurantsList = (e) => {
        e.preventDefault();
        setAllState();
        setShowRestaurantsList(true);
    };

    return (
        <>
            {!showCategoriesList && !showCuisinesList && !showRestaurantsList && !addCategory && !addCuisine && !addRestaurant && (
                <Container>
                    <h2 className="md-auto text-center p-4">Admin Dashboard</h2>
                    <Row className="mb-3">
                        <Col className="mb-3">
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title as="h4">Cuisines</Card.Title>
                                    <Button variant="outline-info" size="sm" className="me-3" onClick={(e) => handleShowCusinesList(e)}>View Cuisines</Button>
                                    <Button variant="outline-info" size="sm" className="me-3" onClick={(e) => handleAddCuisine(e)}>Add Cuisine</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title as="h4">Categories</Card.Title>
                                    <Button variant="outline-info" size="sm" className="me-3" onClick={(e) => handleShowCategoriesList(e)}>View Categories</Button>
                                    <Button variant="outline-info" size="sm" className="me-3" onClick={(e) => handleAddCategory(e)}>Add Category</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title as="h4">Restaurants</Card.Title>
                                    <Button variant="outline-info" size="sm" className="me-3" onClick={(e) => handleShowRestaurantsList(e)}>View Restaurants</Button>
                                    <Button variant="outline-info" size="sm" className="me-3" onClick={(e) => handleAddRestaurant(e)}>Add Restaurant</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col className="mb-3">
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title as="h4">Food Items</Card.Title>
                                    <Button variant="outline-info" size="sm" className="me-3">View Food Items</Button>
                                    <Button variant="outline-info" size="sm" className="me-3">Add Food Item</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title as="h4">Orders</Card.Title>
                                    <Button variant="outline-info" size="sm" className="me-3">View Orders</Button>
                                    <Button variant="outline-info" size="sm" className="me-3">Update Order</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="mb-3">
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title as="h4">Users</Card.Title>
                                    <Button variant="outline-info" size="sm" className="me-3">View Customers</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col className="mb-3">
                            <Card border="secondary">
                                <Card.Body>
                                    <Card.Title as="h4">Restaurant Menu</Card.Title>
                                    <Button variant="outline-info" size="sm" className="me-3">View Menu</Button>
                                    <Button variant="outline-info" size="sm" className="me-3">Update Menu</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            )}
            {addCategory && <AddCategoryPage />}
            {showCategoriesList && <CategoriesListPage />}
            {addCuisine && <AddCuisinePage />}
            {showCuisinesList && <CuisinesListPage />}
            {addRestaurant && <AddRestaurantPage />}
            {showRestaurantsList && <RestaurantsListPage />}
        </>
    );
}
export default AdminDashboard;
