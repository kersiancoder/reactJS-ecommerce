import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item && item.thumbnail
            ? 
            <Card className='p-3'>
            <Card.Body>
            <img className='center' width="30%" src={item.thumbnail} alt="" />
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>Precio: $ {item.price}</Card.Text>
            <Card.Text>Unidades en stock: {item.stock}</Card.Text>
            <p><b>DESCRIPCIÓN:</b></p>
            <p className='bottom'>{item.description}</p>
            </Card.Body>
            </Card>
            : <p>Cargando...</p>
        }
        </>
    );
}

export default ItemDetail;