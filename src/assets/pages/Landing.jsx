import React, { useState, useEffect } from 'react'
import '../css/landing.css'

function Landing() {
    const [eventData, setEventData] = useState({ event: '' })

    const events = [
        "BlockChain Developer Training", "BlockChain Intergration"
    ]

    const handleSelectChange = (e) => {
        setEventData({ event: e.target.value })
    }

    return (
        <>

        <div className='certificate-chooser'>Hello! Welcome to <img src="/ReverionTechLogo.png" /> Certificate Generator
        
            <label htmlFor="event-select" className="event-label">Select an Event:</label>

            <select id="event-select" value={eventData.event} onChange={handleSelectChange} className="event-dropdown">
                <option value="">Select an Event</option>
                {events.map((event, idx) => (
                    <option key={idx} value={event}>{event}</option>
                ))}
            </select>

        </div>

        </>
        
    )
}

export default Landing