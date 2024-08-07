// src/Components/AdminScreen.js
import React from 'react';
import './AdminScreen.css';

const AdminScreen = () => {
  return (
    <div className="admin-screen">
      <div className="admin-screen-header">
        <h1>Admin Ekranı</h1>
        <div className="button-group">
          <button className="add-customer-btn">Kullanıcı Ekle</button>
          <button className="delete-customer-btn">Kullanıcı Sil</button>
          <button className="update-customer-btn">Kullanıcı Güncelle</button>
        </div>
      </div>
      <table className="admin-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Kullanıcı Adı</th>
            <th>Şifre</th>
            <th>Hesap Durumu</th>
            <th>Vazife</th>
            <th>Ders Grubu</th>
          </tr>
        </thead>
        <tbody>
          {/* Verilerinizi buraya ekleyin */}
          <tr>
            <td>1</td>
            <td>İbrahim</td>
            <td>Kebapci</td>
            <td>Aktif</td>
            <td>Broşür</td>
            <td>Mehmet Yıldız</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Murat</td>
            <td>Taşçı</td>
            <td>Aktif</td>
            <td>Kutu</td>
            <td>Halis Abi</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ahmet</td>
            <td>Yavuz</td>
            <td>Pasif</td>
            <td>Medrese İçi</td>
            <td>Onur Abi</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Kenan</td>
            <td>Şanlı</td>
            <td>Pasif</td>
            <td>Asosyal</td>
            <td>Sinan Abi</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Mesut</td>
            <td>Petek</td>
            <td>Açık</td>
            <td>Aktif</td>
            <td>Geylani Abi</td>
          </tr>
          {/* Daha fazla satır ekleyebilirsiniz */}
        </tbody>
      </table>
    </div>
  );
};

export default AdminScreen;
