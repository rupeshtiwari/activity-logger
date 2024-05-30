import React, { useState, useRef } from 'react';
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
  const inputRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
    setTimeout(() => inputRef.current && inputRef.current.focus(), 0);
  };

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
    if (isNaN(value)) {
      setNewCount(''); // Set to empty string if value is NaN
      setWarning('Invalid input');
    } else if (value <= config.maxPoints) {
      setNewCount(value);
      setWarning('');
    } else {
      setNewCount(config.maxPoints);
      setWarning(`Max ${config.maxPoints}`);
    }
  };

  return (
    <Row className='align-items-center mb-2 section-item'>
      <Col xs={6} md={4}>
        <span>{name}</span>
      </Col>
      <Col xs={6} md={3}>
        {isEditing ? (
          <>
            <FormControl
              type='number'
              value={newCount === '' ? '' : newCount} // Ensure value is never NaN
              onChange={handleInputChange}
              size='sm'
              max={config.maxPoints}
              min='0'
              ref={inputRef}
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
          <span className='section-item-count'>{count}</span>
        )}
      </Col>
      <Col xs={12} md={5} className='text-right section-item-buttons'>
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
