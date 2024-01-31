// UserList.jsx
import React, { useState } from 'react';
import '../assets/css/UserList.css';

const usersData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        dob: '1990-05-15',
        enrolledCourses: 5,
        completedCourses: 3,
      },
      {
        id: 2,
        name: 'Alice Johnson',
        email: 'alice.johnson@example.com',
        dob: '1988-08-23',
        enrolledCourses: 8,
        completedCourses: 6,
      },
      {
        id: 3,
        name: 'Bob Smith',
        email: 'bob.smith@example.com',
        dob: '1995-02-10',
        enrolledCourses: 10,
        completedCourses: 8,
      },
  {
    id: 4,
    name: 'Eva Williams',
    email: 'eva.williams@example.com',
    dob: '1992-11-05',
    enrolledCourses: 12,
    completedCourses: 10,
  },
  {
    id: 5,
    name: 'Michael Davis',
    email: 'michael.davis@example.com',
    dob: '1987-04-18',
    enrolledCourses: 6,
    completedCourses: 4,
  },
];

const UserList = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const totalPages = Math.ceil(usersData.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredUsers = usersData.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); 
  };

  return (
    <div className="user-list-container">
      <h2 className="user-list-heading">User List</h2>

      <div className="user-list-search">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      <table className="user-list-table">
        <thead>
          <tr>
            <th className="user-list-th">ID</th>
            <th className="user-list-th">Name</th>
            <th className="user-list-th">Email</th>
            <th className="user-list-th">DOB</th>
            <th className="user-list-th">Enrolled Courses</th>
            <th className="user-list-th">Completed Courses</th>
          </tr>
        </thead>
        <tbody className="user-list-tbody">
          {currentItems.map((user) => (
            <tr key={user.id}>
              <td className="user-list-td">{user.id}</td>
              <td className="user-list-td">{user.name}</td>
              <td className="user-list-td">{user.email}</td>
              <td className="user-list-td">{user.dob}</td>
              <td className="user-list-td">{user.enrolledCourses}</td>
              <td className="user-list-td">{user.completedCourses}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="user-list-pagination-container">
        <ul className="user-list-pagination">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} onClick={() => handlePagination(index + 1)}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
