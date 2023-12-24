import { useState } from "react";

function Home({ isLoggedIn }) {
    // this is to make the login invisible if already logged in but feature is buggy and doesn't always work so took it out of code below
    const loginVisible = {
        display: isLoggedIn ? 'none' : 'block'
    };

    return (
        <div>
            <div className="container px-4 px-lg-5">
                {/* Image and Description Section */}
                <div className="row gx-4 gx-lg-5 align-items-center my-5">
                    {/* Image */}
                    <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://images.fanpop.com/images/image_uploads/Canadian-Kwik-E-Mart-the-simpsons-movie-384841_1024_768.jpg" alt="..." /></div>
                    {/* Text */}
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Marks DR Kwiki-E-Mart</h1>
                        <p>
                            To place an order, send the items of choice, quantity, your name, address and other necessary information to -
                            <a href="mailto:sales@MarksKwikEMart.com" style={{ color: 'blue', textDecoration: 'underline', fontStyle: 'italic' }}>
                                 sales@MarksKwikEMart.com
                            </a>
                        </p>
                        <p>After your order is received you will be sent an email with information on the payment process.</p>
                        <a className="btn btn-primary" href="shopproducts">See our products here!</a>
                    </div>
                </div>

                {/* Additional Info Section */}
                <div className="card text-white bg-secondary my-5 py-4 text-center">
                    <div className="card-body"><h3 className="text-white m-0">See the features of our store below!</h3></div>
                </div>

                {/* Cards Section */}
                <div className="row gx-4 gx-lg-5">
                    {/* Product Info Card */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">What we have to offer</h2>
                                <p className="card-text">See our store.</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="shopproducts">Browse</a></div>
                        </div>
                    </div>
                    {/* About Us Card */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">About Us</h2>
                                <p className="card-text">To learn more about our shop, our products, and our history, click here!</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="/about">More Info</a></div>
                        </div>
                    </div>
                    {/* Login Card */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                            <div className="card-body">
                                <h2 className="card-title">Login</h2>
                                <p className="card-text">Staff Login</p>
                            </div>
                            <div className="card-footer"><a className="btn btn-primary btn-sm" href="/login">Click here to login!</a></div>
                        </div>
                    </div>
                    {/* API Card - Full Width */}
                    <div className="col-md-12 mb-5">
                        <div className="card h-100">
                            <div style={loginVisible}>
                                <div className="card-body">
                                    <h2 className="card-title">Checkout out exchange rates in real time</h2>
                                    <p className="card-text"></p>
                                </div>
                                <div className="card-footer"><a className="btn btn-primary btn-sm" href="/api-page">Click here to see it!</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ margin: '200px' }}></div>
        </div>
    );
}

export default Home;
