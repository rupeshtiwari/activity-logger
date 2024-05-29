import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { fetchDataFromServer } from '../data';
import { Container, Table, Spinner, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLink,
  faEye,
  faSort,
  faSortUp,
  faSortDown,
} from '@fortawesome/free-solid-svg-icons';

const AdminPage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortConfig, setSortConfig] = useState({
    key: 'name',
    direction: 'ascending',
  });

  useEffect(() => {
    const fetchEmployees = async () => {
      // Simulate fetching multiple employees for the admin dashboard
      const employeeIds = [1, 2, 3, 4, 5];
      const fetchedEmployees = await Promise.all(
        employeeIds.map((id) => fetchDataFromServer(id))
      );
      setEmployees(fetchedEmployees.map((data) => data.employee));
      setLoading(false);
    };

    fetchEmployees();
  }, []);

  const sortEmployees = (employees, config) => {
    const sortedEmployees = [...employees];
    if (config !== null) {
      sortedEmployees.sort((a, b) => {
        if (a[config.key] < b[config.key]) {
          return config.direction === 'ascending' ? -1 : 1;
        }
        if (a[config.key] > b[config.key]) {
          return config.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedEmployees;
  };

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const getIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === 'ascending' ? faSortUp : faSortDown;
    } else {
      return faSort;
    }
  };

  if (loading) {
    return <Spinner animation='border' />;
  }

  const sortedEmployees = sortEmployees(employees, sortConfig);

  return (
    <Container className='mt-5'>
      <h2>Admin Dashboard</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th onClick={() => requestSort('name')} className='sortable-header'>
              Name <FontAwesomeIcon icon={getIcon('name')} />
            </th>
            <th
              onClick={() => requestSort('level')}
              className='sortable-header'
            >
              Level <FontAwesomeIcon icon={getIcon('level')} />
            </th>
            <th
              onClick={() => requestSort('score')}
              className='sortable-header'
            >
              Total Score <FontAwesomeIcon icon={getIcon('score')} />
            </th>
            <th>Body of Work Link</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {sortedEmployees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.level}</td>
              <td>{employee.score}</td>
              <td>
                <Button
                  variant='link'
                  href={employee.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-0'
                >
                  <FontAwesomeIcon icon={faLink} /> Link
                </Button>
              </td>
              <td>
                <Button
                  as={Link}
                  to={`/employee/${employee.id}`}
                  variant='primary'
                  size='sm'
                >
                  <FontAwesomeIcon icon={faEye} /> View Details
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminPage;
