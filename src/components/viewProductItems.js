import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import '../App.css';


function ViewProductItem(props) {

    return (

        <div>
            
            <div style={{padding: '5px'}}>
                <Card style={{height:'500px', width: '325px'}}>
                    <Card.Header><h3>{props.myProduct.title}</h3></Card.Header>

                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={props.myProduct.image}></img>
                            <footer>
                                <h5>Product Price: €{props.myProduct.price}</h5>
                                {props.myProduct.description}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    
                </Card>
            </div>
        </div>

    );

}

export default ViewProductItem;