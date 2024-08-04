// Components/UserStats.js

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import './UserStats.css'; // Stil dosyasını içe aktar

const data = [
  { name: '9', users: 400 },
  { name: '11', users: 300 },
  { name: '13', users: 200 },
  { name: '15', users: 278 },
  { name: '17', users: 189 },
  { name: '19', users: 482 },
  { name: '21', users: 300 },
  { name: '23', users: 345 },
  { name: '25', users: 265 },
  { name: '27', users: 400 },
  { name: '29', users: 240 },
];

const UserStats = () => {
  return (
    <div className="user-stats">
      <h2>User Stats</h2>
      <div className="tabs">
        <span className="tab active">Month</span>
        <span className="tab">6 Month</span>
        <span className="tab">Year</span>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="users" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserStats;
