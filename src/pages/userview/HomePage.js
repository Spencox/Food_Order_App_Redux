import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import ItemCard from "../../components/ItemCard";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listRestaurants } from "../../actions/restaurantActions";
import { listCategories } from "../../actions/categoryActions";
import { listCuisines } from "../../actions/cuisineActions";
import AlertMessage from "../../components/AlertMessage";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router";

const HomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [cuisinesList, setCuisinesList] = useState();
  const [restaurantsList, setRestaurantsList] = useState();
  const [categoriesList, setCategoriesList] = useState();

  const listOfCuisines = useSelector((state) => state.cuisineList)
  const listOfRestaurants = useSelector((state) => state.restaurantList);
  const listOfCategories = useSelector((state) => state.categoryList);
  
  const { loadingCuisines, successCuisines, errorCuisines, cuisines} = listOfCuisines;
  const { loadingRestaurants, successRestaurants, errorRestaurants, restaurants } = listOfRestaurants;
  const { loadingCategories, successCategories, errorCategories, categories } = listOfCategories;
 

  const userLogin = useSelector((state) => state.login);
  const { userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      navigate("/");
      dispatch(listCuisines());
      dispatch(listRestaurants());
      dispatch(listCategories());
    } else {
      navigate("/login");
    }
  },[])


  useEffect(() => {
    if (cuisines && cuisines.length > 0) {
      console.log(cuisines);
      setCuisinesList(cuisines);
    }
    if (restaurants && restaurants.length > 0) {
      console.log(restaurants);
      setRestaurantsList(restaurants);
    }
    if (categories && categories.length > 0) {
      console.log(categories);
      setCategoriesList(categories);
    }
  });

  return (
    <>
      {loadingCuisines && <Spinner animation="grow" />}
      {loadingRestaurants && <Spinner animation="grow" />}
      {loadingCategories && <Spinner animation="grow" />}

      {cuisinesList && cuisinesList.length === 0 && (
        <AlertMessage variant="info" message="No cuisines to display" />
      )}
      {restaurantsList && restaurantsList.length === 0 && (
        <AlertMessage variant="info" message="No restaurants to display" />
      )}
      {categoriesList && categoriesList.length === 0 && (
        <AlertMessage variant="info" message="No categories to display" />
      )}

      {cuisinesList && (
        <div className="container-fluid">
          <h4>Try new cuisine</h4>
          <Row className="g-4">
            {categoriesList.map((cuisine) => (
              <Col key={cuisine.id} md={6} sm={12} lg={3}>
                <ItemCard item={cuisine} itemName="cuisine" />
              </Col>
            ))}
          </Row>
        </div>
      )}
      {categoriesList && (
        <div className="container-fluid">
          <h4>Get inspiration for your order</h4>
          <Row className="g-4">
            {categoriesList.map((category) => (
              <Col key={category.id} md={6} sm={12} lg={3}>
                <ItemCard item={category} itemName="category" />
              </Col>
            ))}
          </Row>
        </div>
      )}
      {restaurantsList && (
        <div className="container-fluid">
          <h4>Available restaurants</h4>
          <Row className="g-4">
            {restaurantsList.map((restaurant) => (
              <Col key={restaurant._id} md={6} sm={12} lg={4}>
                <ItemCard item={restaurant} itemName="restaurant" />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </>
  );
};

export default HomePage;
