import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faLink,
  faLevelUpAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const EmployeeHeader = ({ name, link, level, score }) => {
  return (
    <Card className='mb-4'>
      <Card.Body>
        <Row className='mb-2'>
          <Col>
            <h5>
              <FontAwesomeIcon icon={faUser} className='mr-2' />
              Employee Name: <span>{name}</span>
            </h5>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <h5>
              <FontAwesomeIcon icon={faLink} className='mr-2' />
              Body of Work Link:
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='ml-2'
              >
                {link}
              </a>
            </h5>
          </Col>
        </Row>
        <Row className='mb-2'>
          <Col>
            <h5>
              <FontAwesomeIcon icon={faLevelUpAlt} className='mr-2' />
              Level: <span>{level}</span>
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <h5>
              <FontAwesomeIcon icon={faStar} className='mr-2' />
              Total Score: <span>{score}</span>
            </h5>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default EmployeeHeader;
