import styles from './RestaurantCard.module.css'
import { Card, Col} from 'react-bootstrap'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'next/link'

const RestaurantCard = ({name, neighborhood, image, cuisine_type}) => {
    return (
        <Col md={3}>
            <Card className={styles.card}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <p className={styles.neighborhood}><FontAwesomeIcon icon={faMapMarkerAlt} /> {neighborhood}</p>
                <Card.Title>{name}</Card.Title>
                <hr></hr>
                <p>{cuisine_type}</p>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default RestaurantCard