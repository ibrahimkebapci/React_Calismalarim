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
        <h2>Hizmetlerin Durumu</h2>
        <div className="cards-container">
          <Card title="Bekleyenler" count="35" color="#28a745" />
          <Card title="Şu Anda Yapılanlar" count="50" color="#6f42c1" />
          <Card title="Tamamlananlar" count="120" color="#fd7e14" />
          <Card title="Yedek_1" count="45" color="#17a2b8" />
          <Card title="Yedek_2" count="65" color="#343a40" />
          <Card title="Yedek_3" count="110" color="#6c757d" />
        </div>
        <LatestEvents /> {/* LatestEvents bileşenini ekliyoruz */}
        <UserStats /> {/* UserStats bileşenini ekliyoruz */}
      </div>
    );
  }
}

export default Dashboard;

