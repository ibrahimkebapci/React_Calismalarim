import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { day: 9, users: 480 },
  { day: 11, users: 300 },
  { day: 13, users: 250 },
  { day: 15, users: 420 },
  { day: 17, users: 320 },
  { day: 19, users: 482 },
  { day: 21, users: 400 },
  { day: 23, users: 300 },
  { day: 25, users: 350 },
  { day: 27, users: 280 },
  { day: 29, users: 390 },
];

const UserStats = () => {
  return (
    <div>
      <h2>User Stat</h2>
      <BarChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 20, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="users" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default UserStats;
