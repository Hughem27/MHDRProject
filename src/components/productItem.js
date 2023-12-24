import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css';


function ProductItem(props) {

    return (
        // displaying products with admin features
        <div>

            <div style={{ padding: '5px' }}>
                <Card style={{ height: '500px', width: '325px' }}>
                    <Card.Header><h3>{props.myProduct.title}</h3></Card.Header>

                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img
                                src={props.myProduct.image}
                                alt="Product Image"
                                style={{ width: '250px', height: '250px', objectFit: 'contain' }}
                            />

                            <footer>
                                <h5>Product Price: €{props.myProduct.price}</h5>
                                {props.myProduct.description}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <div className='ShopProducts'>
                        <Link to={'/edit/' + props.myProduct._id} className='btn btn-primary' style={{ width: '200px' }}>Edit</Link>
                        <Button className='shopbuttons' variant='danger' onClick={
                            (e) => {
                                e.preventDefault();

                                axios.delete('http://localhost:4000/api/product/' + props.myProduct._id)
                                    .then((res) => {
                                        let reload = props.Reload();
                                    })
                                    .catch();
                            }
                        }>Delete</Button>
                    </div>
                </Card>
            </div>
        </div>

    );

}

export default ProductItem;