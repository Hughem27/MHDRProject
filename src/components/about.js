function About() {
    return (
        <div>
            <div>
                <div>

                    {/* About us Page */}
                    <div className="bg-light">
                        <div className="container py-5">
                            <div className="row h-100 align-items-center py-5">
                                
                                <div className="col-lg-6">
                                    <h1 className="display-4">About us</h1>
                                </div>
                                
                                <div className="col-lg-6">
                                    <p className="lead text-muted mb-0">
                                    Marks Kwiki-E-Market is a new company based in Atlantic Technological University, Galway.
                                        Currently we are supplying highquality products of a large variety to people and companies across Ireland.
                                    </p>
                                    <p className="lead text-muted">
                                        <a href="//" className="text-muted">
                                            <u></u>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="bg-white py-5">

                    <div className="container py-5" style={{ display: 'flex' }}>
                        <div className="row align-items-center mb-5 w-100">
                            <div className="col-md-6">

                                <div className="card">
                                    <div className="card-body">                                       
                                        <p className="card-text">John Healy</p>
                                        <p className="card-text">Martin Hynes</p>
                                        <p className="card-text">Brian McGinley</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                                <h2 className="font-weight-light">Some of our most Valued Customers</h2>
                                <p className="font-italic text-muted mb-4">See what they say about us!</p>
                                <a href="#reviewSection" className="btn btn-light px-5 rounded-pill shadow-sm">Reviews</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div>
                    <div className="bg-light" id="reviewSection">
                        <div className="container py-5">
                            <div className="row h-100 align-items-center py-5">
                                <div className="col-lg-6 d-none d-lg-block">
                                    <img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" className="img-fluid" />
                                </div>
                                <div className="col-lg-6 ">
                                    <h1 className="display-4">Reviews</h1>
                                    <p className="lead text-muted mb-0">See what our customers have to say about us!</p>

                                    {/* Reviews */}
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">John Healy</h5>
                                            <p className="card-text">"I recently visited Marks Kwiki-E-Market, and I was amazed by the variety and quality of products. The folks in there were incredibly helpful and knowledgeable. A five-star experience!"</p>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Martin Hynes</h5>
                                            <p className="card-text">"Marks Kwiki-E-Market is my go-to for all my needs. Their products are top-notch, and their customer service is unbeatable. Highly recommend!"</p>
                                        </div>
                                    </div>
                                    <div className="card mt-3">
                                        <div className="card-body">
                                            <h5 className="card-title">Brian McGinley</h5>
                                            <p className="card-text">"Absolutely thrilled with my purchase from Marks Kwiki-E-Market! The quality exceeded my expectations, and the prices are great. I'll definitely be a returning customer."</p>
                                        </div>
                                    </div>

                                    <p className="lead text-muted"> <a href="//" className="text-muted">
                                        <u></u></a>
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default About;