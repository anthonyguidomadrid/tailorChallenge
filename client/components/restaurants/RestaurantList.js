import styles from './RestaurantList.module.css'
import React, { useState, useEffect } from "react";
import RestaurantsService from '../../pages/api/restaurants-service'
import RestaurantCard from './RestaurantCard'
import { Container, Row, Spinner } from 'react-bootstrap'

const restaurantService = new RestaurantsService()

const RestaurantsList = () => {

    const [restaurants, setRestaurants] = useState();

     useEffect(() => {
        updateRestaurants()
    }, [] )

    const updateRestaurants = () => {
        restaurantService
            .getAllRestaurants()
            .then(response => setRestaurants(response.data))
            .catch(err => console.log(err))
    }

    return (
        !restaurants? <Spinner animation="grow" className='spinner'/> :
        <Container>
        <h1>{restaurants.length} Restaurants in New York</h1>
        <Row>
        {restaurants.map(elm => <RestaurantCard key={elm._id} {...elm}/>)}
        </Row>
        </Container>
    );
}

export default RestaurantsList