import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ({thumbnail, price, title}) => {

    return (
            <Card className='p-3'>
            <Card.Img variant="top" src={thumbnail}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>$ {price}</Card.Text>
            <Button variant="primary">Ver producto</Button>
            </Card.Body>
            </Card>
    );
}

export default Products;
