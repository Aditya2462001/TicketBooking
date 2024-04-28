import React from 'react'

const Search = () => {
    return (
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                    <h2>Tickets</h2>
                    <p>Book your ticket now</p>
                </div>
                <div className="container">

                    <div className="info d-flex align-items-center justify-content-center">
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input name="name" type="text" className="form-control" placeholder="Your Name*" />
                            </div>
                            <div className="col-md-4 form-group">
                                <input name="email" type="text" className="form-control" placeholder="Your Email*" />
                            </div>
                            <button type="submit" className="col-md-3 btn btn-primary">Search</button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Search