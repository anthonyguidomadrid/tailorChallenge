import axios from 'axios'

class RestaurantsService {
    constructor() {
        this.app = axios.create({
            baseURL: 'http://localhost:5000/api/restaurants',
            withCredentials: true
        })
    }
    
    getAllRestaurants = () => this.app.get('/')
}

export default RestaurantsService