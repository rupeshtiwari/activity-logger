import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit,
  faCheck,
  faTimes,
  faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';
import { FormControl, Button, Row, Col, Alert } from 'react-bootstrap';
import config from '../config';
import './SectionItem.css';

const SectionItem = ({ name, count, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCount, setNewCount] = useState(count);
  const [warning, setWarning] = useState('');

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setNewCount(count);
    setWarning('');
  };
  const handleCommit = () => {
    if (newCount <= config.maxPoints) {
      setIsEditing(false);
      onUpdate(newCount);
      setWarning('');
    }
  };

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value <= config.maxPoints) {
      setNewCount(value);
      setWarning('');
    } else {
      setNewCount(config.maxPoints);
      setWarning(`Max ${config.maxPoints}`);
    }
  };

  return (
    <Row className='align-items-center mb-2 section-item'>
      <Col xs={6}>
        <span>{name}</span>
      </Col>
      <Col xs={2}>
        {isEditing ? (
          <>
            <FormControl
              type='number'
              value={newCount}
              onChange={handleInputChange}
              size='sm'
              max={config.maxPoints}
              min='0'
            />
            {warning && (
              <Alert variant='danger' className='mt-2 p-2 section-item-alert'>
                <FontAwesomeIcon
                  icon={faExclamationTriangle}
                  className='mr-1'
                />
                {warning}
              </Alert>
            )}
          </>
        ) : (
          <span>{count}</span>
        )}
      </Col>
      <Col xs={4} className='text-right'>
        {isEditing ? (
          <>
            <Button
              variant='outline-success'
              size='sm'
              onClick={handleCommit}
              className='mr-2'
            >
              <FontAwesomeIcon icon={faCheck} />
            </Button>
            <Button
              variant='outline-danger'
              size='sm'
              onClick={handleCancel}
              className='mr-2'
            >
              <FontAwesomeIcon icon={faTimes} />
            </Button>
          </>
        ) : (
          <Button
            variant='outline-primary'
            size='sm'
            onClick={handleEdit}
            className='mr-2'
          >
            <FontAwesomeIcon icon={faEdit} />
          </Button>
        )}
      </Col>
    </Row>
  );
};

export default SectionItem;
