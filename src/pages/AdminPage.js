import React, { useEffect, useState } from 'react';
import { Table, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLink,
  faLevelUpAlt,
  faStar,
  faInfo,
  faSort,
} from '@fortawesome/free-solid-svg-icons';
import { fetchDataFromServer } from '../data';
import './AdminPage.css';

const AdminPage = () => {
  const [employees, setEmployees] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'asc',
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      const { employees } = await fetchDataFromServer();
      setEmployees(employees);
    };

    fetchEmployees();
  }, []);

  const sortEmployees = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });

    setEmployees((prevEmployees) =>
      [...prevEmployees].sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === 'asc' ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === 'asc' ? 1 : -1;
        }
        return 0;
      })
    );
  };

  const getSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'asc' ? faSort : faSort;
    }
    return faSort;
  };

  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>Admin Dashboard</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th
                onClick={() => sortEmployees('name')}
                style={{ cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={faUser} /> Name
                <FontAwesomeIcon icon={getSortIcon('name')} className='ml-1' />
              </th>
              <th>
                <FontAwesomeIcon icon={faLink} /> Body of Work Link
              </th>
              <th
                onClick={() => sortEmployees('level')}
                style={{ cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={faLevelUpAlt} /> Level
                <FontAwesomeIcon icon={getSortIcon('level')} className='ml-1' />
              </th>
              <th
                onClick={() => sortEmployees('score')}
                style={{ cursor: 'pointer' }}
              >
                <FontAwesomeIcon icon={faStar} /> Total Score
                <FontAwesomeIcon icon={getSortIcon('score')} className='ml-1' />
              </th>
              <th>
                <FontAwesomeIcon icon={faInfo} /> Details
              </th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.name}</td>
                <td>
                  <a
                    href={employee.link}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    View Profile
                  </a>
                </td>
                <td>{employee.level}</td>
                <td>{employee.score}</td>
                <td>
                  <Link to={`/employee/${employee.id}`}>View Details</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default AdminPage;
