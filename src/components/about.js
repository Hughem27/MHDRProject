function About(){
    return(
        <div>
        <div>
            <div>
                <div className="bg-light">
                    <div className="container py-5">
                        <div className="row h-100 align-items-center py-5">
                            <div className="col-lg-6">
                                <h1 className="display-4">About us</h1>
                                <p className="lead text-muted mb-0">MarkHughesDataRepProject is a new 
                                    company based in Atlantic Technological University, Galway.
                                    Currently we are supplying some things and
                                    some other stuff to some people and companies throughout
                                    Ireland. </p>
                                <p className="lead text-muted"> <a href="//" className="text-muted">
                                    <u></u></a>
                                </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-5">
                
                <div className="container py-5" style={{justifyContent: 'right', alignContent: 'end', display: 'flex'}}>
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6 order-2 order-lg-1"><i className="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                            <h2 className="font-weight-light">Some of our Valued Customers</h2>
                            <p className="font-italic text-muted mb-4"> See what they say about us!  </p><a href="#reviewSection" className="btn btn-light px-5 rounded-pill shadow-sm">Reviews</a>
                        </div>
                        <div className="col-lg-5 px-5 mx-auto order-1 order-lg-2">
                          
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
                                <p className="lead text-muted mb-0">Replace image with reviews </p>
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