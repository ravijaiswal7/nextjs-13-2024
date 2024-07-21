import React, { Suspense } from 'react'
import TicketList from './TicketList'
import Loading from '../loading'

function Tickets() {
  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p>
            <small>
              Currently open tickets
            </small>
          </p>
        </div>
      </nav>
      {/* Too show loader only for the ticket list */}
      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  )
}

export default Tickets