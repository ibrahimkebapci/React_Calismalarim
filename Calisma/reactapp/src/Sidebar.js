// src/Sidebar.js
//1. Bölümün Kodları
/*
import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 300px;
  height: 100vh;
  background-color: #f0f0f0;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.active ? '#673ab7' : '#fff'};
  color: ${props => props.active ? '#fff' : '#333'};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.active ? '#673ab7' : '#e0e0e0'};
  }
`;

const MenuTitle = styled.span`
  font-size: 16px;
`;

const Badge = styled.span`
  background-color: ${props => props.color || '#2196f3'};
  border-radius: 12px;
  padding: 5px 10px;
  color: #fff;
  font-size: 12px;
`;

const UserStatus = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;

const StatusIndicator = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.statusColor || '#ccc'};
  margin-left: auto;
`;

const Sidebar = () => {
  const menuItems = [
    { title: 'Dashboard', count: 1, color: '#2196f3' },
    { title: 'Pages', count: 3, color: '#9c27b0', active: true },
    { title: 'Posts', count: 'NEW', color: '#ff5722' },
    { title: 'Media Files', count: 1, color: '#2196f3' },
    { title: 'Users', count: 1, color: '#ffeb3b' },
    { title: 'Categories', count: 1, color: '#2196f3' },
    { title: 'Tags', count: 1, color: '#ffeb3b' },
    { title: 'Comments', count: 1, color: '#2196f3' },
    { title: 'Settings', count: '', color: '' },
  ];

  const users = [
    { name: 'Bess Atkins', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
    { name: 'Brett Foster', status: 'Offline', img: 'https://via.placeholder.com/40', statusColor: 'gray' },
    { name: 'Leona Todd', status: 'Offline', img: 'https://via.placeholder.com/40', statusColor: 'gray' },
    { name: 'Ann Ortiz', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
    { name: 'Nicholas Black', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
    { name: 'Ollie Harmon', status: 'Wait', img: 'https://via.placeholder.com/40', statusColor: 'orange' },
    { name: 'Vincent Reese', status: 'Wait', img: 'https://via.placeholder.com/40', statusColor: 'orange' },
    { name: 'Ida Robertson', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
  ];

  return (
    <SidebarContainer>
      {menuItems.map((item, index) => (
        <MenuItem key={index} active={item.active}>
          <MenuTitle>{item.title}</MenuTitle>
          {item.count && <Badge color={item.color}>{item.count}</Badge>}
        </MenuItem>
      ))}
      <div>
        {users.map((user, index) => (
          <UserStatus key={index}>
            <img src={user.img} alt={user.name} />
            <span>{user.name}</span>
            <StatusIndicator statusColor={user.statusColor} />
          </UserStatus>
        ))}
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
*/