import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLevelUpAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import './EmployeeHeader.css';

const EmployeeHeader = ({
  name,
  link,
  level,
  score,
  picture,
  title,
  location,
}) => {
  return (
    <Card className='mb-4 employee-header'>
      <Card.Body>
        <Row className='align-items-center'>
          <Col xs={3} md={2}>
            <Image
              src={picture}
              roundedCircle
              fluid
              className='employee-picture'
            />
          </Col>
          <Col xs={9} md={10}>
            <h3 className='employee-name'>{name}</h3>
            <p className='employee-title'>{title}</p>
            <p className='employee-location'>{location}</p>
            <a
              href={link}
              target='_blank'
              rel='noopener noreferrer'
              className='employee-link'
            >
              View Profile
            </a>
            <Row className='mt-2'>
              <Col xs={6} md={4} className='employee-stats'>
                <FontAwesomeIcon icon={faLevelUpAlt} className='mr-2' />
                Level: <span>{level}</span>
              </Col>
              <Col xs={6} md={4} className='employee-stats'>
                <FontAwesomeIcon icon={faStar} className='mr-2' />
                Total Score: <span>{score}</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EmployeeHeader;
