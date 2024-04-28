import React from 'react'

const TicketCard = () => {
    return (
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="service-item position-relative">
                <div className="icon">
                    <i className="fa-solid fa-helmet-safety"></i>
                </div>
                <h3>Velit Doloremque</h3>
                <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                <a href="service-details.html" className="readmore stretched-link">Learn more <i className="bi bi-arrow-right"></i></a>
            </div>
        </div>
    )
}

export default TicketCard