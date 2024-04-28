import React from 'react'
import TicketCard from '../components/TicketCard'

const Tickets = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="row gy-4">
            <TicketCard />
        </div>
      </div>
    </section>
  )
}

export default Tickets