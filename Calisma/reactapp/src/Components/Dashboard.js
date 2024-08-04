// Components/Dashboard.js
// Components/Dashboard.js

import React from 'react';
import LatestEvents from './LatestEvents'; // LatestEvents bileşenini içe aktar
import Card from './Card'; // Card bileşenini içe aktar
import UserStats from './UserStats'; // UserStats bileşenini içe aktar
import './Dashboard.css'; // Stil dosyasını içe aktar

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="cards-container">
          <Card title="Pages" count="1345" color="#28a745" />
          <Card title="Posts" count="12456" color="#6f42c1" />
          <Card title="Users" count="21" color="#fd7e14" />
          <Card title="Files" count="1220" color="#17a2b8" />
          <Card title="Categories" count="65" color="#343a40" />
          <Card title="Comments" count="9876" color="#6c757d" />
        </div>
        <LatestEvents /> {/* LatestEvents bileşenini ekliyoruz */}
        <UserStats /> {/* UserStats bileşenini ekliyoruz */}
      </div>
    );
  }
}

export default Dashboard;


/*
// 2. Bölüm
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const Card = styled.div`
  background-color: ${props => props.bgColor || '#fff'};
  color: #fff;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardTitle = styled.h2`
  font-size: 24px;
  margin: 0;
`;

const CardCount = styled.p`
  font-size: 36px;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const Dashboard = () => {
  const data = [
    { title: 'Pages', count: 1345, bgColor: '#4CAF50' },
    { title: 'Posts', count: 12456, bgColor: '#9C27B0' },
    { title: 'Users', count: 21, bgColor: '#FF5722' },
    { title: 'Files', count: 1220, bgColor: '#03A9F4' },
    { title: 'Categories', count: 65, bgColor: '#212121' },
    { title: 'Comments', count: 9876, bgColor: '#E0E0E0', textColor: '#212121' },
  ];

  return (
    <Container>
      {data.map((item, index) => (
        <Card key={index} bgColor={item.bgColor} style={{color: item.textColor || '#fff'}}>
          <CardTitle>{item.title}</CardTitle>
          <CardCount>{item.count}</CardCount>
          <Button>View All</Button>
        </Card>
      ))}
    </Container>
  );
};
*/
// Components/Dashboard.js




