import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/css/UserList.css'; // Import the corresponding CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/auth/get')
      .then(response => {
        setUsers(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div className="user-list-container">
      <h2 className="user-list-heading">User List</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table className="user-list-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              {/* <th>Number of Courses Enrolled</th> New column */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>{user.numberOfCoursesEnrolled}</td> Display number of courses enrolled */}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
