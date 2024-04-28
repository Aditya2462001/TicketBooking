import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer id="footer" className="footer">

            <div className="footer-content position-relative">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3>UpConstruction</h3>
                                <p> A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </p>
                                <div className="social-links d-flex mt-3">
                                    <Link href="#" className="d-flex align-items-center justify-content-center">
                                        <i className="bi bi-twitter"></i></Link>
                                    <Link href="#" className="d-flex align-items-center justify-content-center">
                                        <i className="bi bi-facebook"></i></Link>
                                    <Link href="#" className="d-flex align-items-center justify-content-center">
                                        <i className="bi bi-instagram"></i></Link>
                                    <Link href="#" className="d-flex align-items-center justify-content-center">
                                        <i className="bi bi-linkedin"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Useful Links</h4>
                            <ul>
                                <li><Link href="#">Home</Link></li>
                                <li><Link href="#">About us</Link></li>
                                <li><Link href="#">Services</Link></li>
                                <li><Link href="#">Terms of service</Link></li>
                                <li><Link href="#">Privacy policy</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Our Services</h4>
                            <ul>
                                <li><Link href="#">Web Design</Link></li>
                                <li><Link href="#">Web Development</Link></li>
                                <li><Link href="#">Product Management</Link></li>
                                <li><Link href="#">Marketing</Link></li>
                                <li><Link href="#">Graphic Design</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Hic solutasetp</h4>
                            <ul>
                                <li><Link href="#">Molestiae accusamus iure</Link></li>
                                <li><Link href="#">Excepturi dignissimos</Link></li>
                                <li><Link href="#">Suscipit distinctio</Link></li>
                                <li><Link href="#">Dilecta</Link></li>
                                <li><Link href="#">Sit quas consectetur</Link></li>
                            </ul>
                        </div>

                        <div className="col-lg-2 col-md-3 footer-links">
                            <h4>Nobis illum</h4>
                            <ul>
                                <li><Link href="#">Ipsam</Link></li>
                                <li><Link href="#">Laudantium dolorum</Link></li>
                                <li><Link href="#">Dinera</Link></li>
                                <li><Link href="#">Trodelas</Link></li>
                                <li><Link href="#">Flexo</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-legal text-center position-relative">
                <div className="container">
                    <div className="copyright">
                        &copy; Copyright <strong><span>Ticket Booking.</span></strong> All Rights Reserved
                    </div>
                    <div className="credits">
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer