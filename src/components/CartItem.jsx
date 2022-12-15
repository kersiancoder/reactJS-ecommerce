import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const CartItem = ({id, thumbnail, price, title}) => {

    return (
            <Card className='p-3'>
            <Link to={`/item/${id}`}><Card.Img variant="top" src={thumbnail}/></Link>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>$ {price}</Card.Text>
            <Button as={Link} to={`/item/${id}`} variant="primary">Eliminar producto</Button>
            </Card.Body>
            </Card>
    );
}

export default CartItem;
