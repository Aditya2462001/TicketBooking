import React from 'react'
import TicketCard from '../components/TicketCard'

const Profile = () => {
  return (
    <section id="services" class="services section-bg">

      <div className="section-header">
        <h2>User Details</h2>
        <p>Name: Aditya Chandrikapure</p>
        <p>Number: Phone Number</p>
        <p>Email:aditya@gmail.com </p>
      </div>

      <div class="container" data-aos="fade-up">

        <div class="row gy-4">
          <TicketCard />
        </div>

      </div>
    </section>
  )
}

export default Profile