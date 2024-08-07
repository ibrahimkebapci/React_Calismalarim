
import { Link } from 'react-router-dom';
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
    { title: 'Anasayfa', count: 1, color: '#2196f3', link: '/' },
    { title: 'Kutu Hizmeti', count: 3, color: '#2196f3', active: false, link: '/kutu-hizmeti' },
    { title: 'Broşür Hizmeti', count: 'NEW', color: '#ff5722', link: '/brosur-hizmeti' },
    { title: 'İç Hizmetler', count: 1, color: '#2196f3', link: '/ic-hizmetler' },
    { title: 'Medrese İhtiyaçları', count: 1, color: '#ffeb3b', link: '/medrese-ihtiyaclari' },
    { title: 'Ayarlar', count: 1, color: '#2196f3', link: '/ayarlar' },
    { title: 'Admin Ekranı', count: 1, color: '#ffeb3b', link: '/admin-screen' },
  ];

  const users = [
    { name: 'İbrahim', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
    { name: 'Kullanıcı 1', status: 'Offline', img: 'https://via.placeholder.com/40', statusColor: 'gray' },
    { name: 'Kullanıcı 2', status: 'Offline', img: 'https://via.placeholder.com/40', statusColor: 'gray' },
    { name: 'Kullanıcı 3', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
    { name: 'Kullanıcı 4', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
    { name: 'Kullanıcı 5', status: 'Wait', img: 'https://via.placeholder.com/40', statusColor: 'orange' },
    { name: 'Kullanıcı 6', status: 'Wait', img: 'https://via.placeholder.com/40', statusColor: 'orange' },
    { name: 'Kullanıcı 7', status: 'Active', img: 'https://via.placeholder.com/40', statusColor: 'green' },
  ];

  return (
    <SidebarContainer>
      {menuItems.map((item, index) => (
        <Link to={item.link} key={index} style={{ textDecoration: 'none' }}>
          <MenuItem active={item.active}>
            <MenuTitle>{item.title}</MenuTitle>
            {item.count && <Badge color={item.color}>{item.count}</Badge>}
          </MenuItem>
        </Link>
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
