import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 

function Create() {

    // Initializing product attributes
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    
    const navigate = useNavigate();
    const backToAdmin = () => {
        navigate('/adminpage'); // Navigate to the '/adminpage'
    };

    // Handling the add prodcut function
    const handleSubmit = (e) => {
        e.preventDefault();

        // console.log("Title: " + title +
        //     " Image: " + image +
        //     " Description: " + description +
        //     " Price: " + price);

        //  Product Details
        const product = {
            title: title,
            image: image,
            description: description,
            price: price
        };

        // Posting the product back to the server and navigating back to home page after product has been added 
        axios.post('http://localhost:4000/api/product', product)
            .then()
            .catch();
            navigate('/');     
    }
    // some comment
    return (
        <div >
            <h2>Add Product Page</h2>
            <div className="AddProducts">
                <div style={{ background: 'solid', width: '40%' }}>
                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label>Add Product Title: </label>
                            <input type="text"
                                className="form-control"
                                value={title}
                                onChange={(e) => { setTitle(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Add product Image: </label>
                            <input type="text"
                                className="form-control"
                                value={image}
                                onChange={(e) => { setImage(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Add Product Price: </label>
                            <input type="text"
                                className="form-control"
                                value={price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                        </div>
                        <div className="form-group">
                            <label>Add Product description: </label>
                            <input type="text"
                                className="form-control"
                                value={description}
                                onChange={(e) => { setDescription(e.target.value) }}
                            />
                        </div>
                        <div>
                            <input type="submit"
                                className="shopbuttons"
                                value="Add Product"
                            >
                            </input>

                        </div>
                    </form>

                    {/* Back to Admin Center Page */}
                    <div>
                        <button onClick={backToAdmin}>Back to Control Center</button>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Create;