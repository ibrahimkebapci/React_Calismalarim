// Components/LatestEvents.js

import React from 'react';
import './LatestEvents.css'; // Stil dosyasını içe aktar

const events = [
  {
    time: "11:32",
    type: "New Page",
    user: "May Padilla",
    description: "About Page Company",
    icon: "📄"
  },
  {
    time: "11:20",
    type: "New Comment",
    user: "Erik Pittman",
    description: "You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer ...",
    icon: "💬"
  },
  {
    time: "11:20",
    type: "New Comment",
    user: "Erik Pittman",
    description: "Category «Templates»",
    icon: "💬"
  },
  {
    time: "11:20",
    type: "New User",
    user: "Erik Pittman",
    description: "New User Alberta Colon",
    icon: "👤"
  },
  {
    time: "11:20",
    type: "New User",
    user: "Erik Pittman",
    description: "Add New Post «Second Post»",
    icon: "🖼️"
  }
];

const LatestEvents = () => {
  return (
    <div className="latest-events">
      <h2>Latest Events</h2>
      <div className="timeline">
        {events.map((event, index) => (
          <div key={index} className="event">
            <div className="event-icon">{event.icon}</div>
            <div className="event-time">{event.time}</div>
            <div className="event-type">{event.type}</div>
            <div className="event-user">{event.user}</div>
            <div className="event-description">{event.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestEvents;
