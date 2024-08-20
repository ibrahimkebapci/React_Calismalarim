import React, { useState } from 'react';
import './AdminScreen.css';

const AdminScreen = () => {
  const users = [
    { id: 1, name: 'İbrahim', password: 'Kebapci', status: 'Aktif', role: 'Müdür', group: 'Yusuf ' },
    { id: 2, name: 'Murat', password: 'Taşçı', status: 'Aktif', role: 'Depo', group: 'Ali ' },
    { id: 3, name: 'Ahmet', password: 'Yavuz', status: 'Pasif', role: 'IT', group: 'Murat ' },
    { id: 4, name: 'Kenan', password: 'Şanlı', status: 'Pasif', role: 'Help Desk', group: 'Ahmet ' },
    { id: 5, name: 'Mesut', password: 'Petek', status: 'Aktif', role: 'Yemekhane', group: 'Kenan ' },
    { id: 6, name: 'Yeni Kullanıcı', password: 'Yeni Şifre', status: 'Durum', role: 'Yeni Vazife', group: 'Yeni Ders Grubu' },
    { id: 7, name: 'Kullanıcı 7', password: 'Şifre 7', status: 'Aktif', role: 'Rol 7', group: 'Grup 7' },
    { id: 8, name: 'Kullanıcı 8', password: 'Şifre 8', status: 'Aktif', role: 'Rol 8', group: 'Grup 8' },
    { id: 9, name: 'Kullanıcı 9', password: 'Şifre 9', status: 'Aktif', role: 'Rol 9', group: 'Grup 9' },
    { id: 10, name: 'Kullanıcı 10', password: 'Şifre 10', status: 'Aktif', role: 'Rol 10', group: 'Grup 10' },
    { id: 11, name: 'Kullanıcı 11', password: 'Şifre 11', status: 'Aktif', role: 'Rol 11', group: 'Grup 11' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  const usersPerPage = 10;

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredUsers.length / usersPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSelectUser = (id) => {
    if (selectedUsers.includes(id)) {
      setSelectedUsers(selectedUsers.filter(userId => userId !== id));
    } else {
      setSelectedUsers([...selectedUsers, id]);
    }
  };

  const handleSelectAllUsers = () => {
    if (selectedUsers.length === currentUsers.length) {
      setSelectedUsers([]);
    } else {
      setSelectedUsers(currentUsers.map(user => user.id));
    }
  };

  return (
    <div className="admin-screen">
      <div className="admin-screen-header">
        <h1>Admin Ekranı</h1>
        <div className="button-group">
          <button className="add-customer-btn">Personel Ekle</button>
          <button className="delete-customer-btn">Personel Sil</button>
          <button className="update-customer-btn">Personel Güncelle</button>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Ara..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  onChange={handleSelectAllUsers}
                  checked={selectedUsers.length === currentUsers.length}
                  style={{ transform: 'scale(0.8)' }}
                />
              </th>
              <th>Kullanıcı ID</th>
              <th>Kullanıcı Adı</th>
              <th>Şifre</th>
              <th>Hesap Durumu</th>
              <th>Görev</th>
              <th>Sorumlu Müdür</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map(user => (
              <tr key={user.id}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => handleSelectUser(user.id)}
                    checked={selectedUsers.includes(user.id)}
                    style={{ transform: 'scale(0.8)' }}
                  />
                </td>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.password}</td>
                <td>{user.status}</td>
                <td>{user.role}</td>
                <td>{user.group}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {pageNumbers.map(number => (
          <button key={number} onClick={() => paginate(number)} className={currentPage === number ? 'active' : ''}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminScreen;
