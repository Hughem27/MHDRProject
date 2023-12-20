import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


function ProductItem(props) {

    return (

        <div>
            
            <div>
                <Card>
                    <Card.Header><h3>{props.myBook.title}</h3></Card.Header>

                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={props.myBook.image}></img>
                            <footer>
                                <h5>Product Price: €{props.myBook.price}</h5>
                                {props.myBook.description}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <div className='ShopProducts'>
                        <Link to={'/edit/' + props.myBook._id} className='btn btn-primary' style={{ width: '200px' }}>Edit</Link>
                        <Button className='shopbuttons' variant='danger' onClick={
                            (e) => {
                                e.preventDefault();

                                axios.delete('http://localhost:4000/api/book/' + props.myBook._id)
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