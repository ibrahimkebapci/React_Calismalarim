// src/EventTimeline.js
//3.Alan için kod

import React from 'react';
import styled from 'styled-components';

const TimelineContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: auto;
`;

const EventItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const EventIcon = styled.div`
  background-color: ${props => props.bgColor || '#ccc'};
  color: #fff;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-right: 15px;
`;

const EventDetails = styled.div`
  flex: 1;
`;

const EventTime = styled.div`
  font-size: 12px;
  color: #999;
  margin-bottom: 5px;
`;

const EventTitle = styled.div`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const EventUser = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 10px;
`;

const EventDescription = styled.div`
  font-size: 12px;
  color: #333;
`;

const events = [
  {
    time: '11:32',
    icon: '📄',
    iconColor: '#4caf50',
    title: 'New Page',
    user: 'May Padilla',
    description: 'About Page Company',
  },
  {
    time: '11:20',
    icon: '💬',
    iconColor: '#9c27b0',
    title: 'New Comment',
    user: 'Erik Pittman',
    description: 'You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer ...',
  },
  {
    time: '11:20',
    icon: '📂',
    iconColor: '#3f51b5',
    title: 'Category',
    user: 'Erik Pittman',
    description: 'Templates',
  },
  {
    time: '11:20',
    icon: '👤',
    iconColor: '#ff9800',
    title: 'New User',
    user: 'Erik Pittman',
    description: 'New User Alberta Colon',
  },
  {
    time: '11:20',
    icon: '📷',
    iconColor: '#e91e63',
    title: 'Add New Post',
    user: 'Erik Pittman',
    description: 'Second Post',
  },
];

const EventTimeline = () => {
  return (
    <TimelineContainer>
      <h3>Latest Events</h3>
      {events.map((event, index) => (
        <EventItem key={index}>
          <EventIcon bgColor={event.iconColor}>{event.icon}</EventIcon>
          <EventDetails>
            <EventTime>{event.time}</EventTime>
            <EventTitle>{event.title}</EventTitle>
            <EventUser>{event.user}</EventUser>
            <EventDescription>{event.description}</EventDescription>
          </EventDetails>
        </EventItem>
      ))}
    </TimelineContainer>
  );
};

export default EventTimeline;
