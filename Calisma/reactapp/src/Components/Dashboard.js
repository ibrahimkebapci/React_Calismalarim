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

