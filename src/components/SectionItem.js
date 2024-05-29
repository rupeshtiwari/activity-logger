import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons'; // Removed faTrash
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';

const SectionItem = ({ name, count, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newCount, setNewCount] = useState(count);

  const handleEdit = () => setIsEditing(true);
  const handleCancel = () => {
    setIsEditing(false);
    setNewCount(count);
  };
  const handleCommit = () => {
    setIsEditing(false);
    onUpdate(newCount);
  };

  return (
    <Row className='align-items-center mb-2'>
      <Col xs={6}>
        <span>{name}</span>
      </Col>
      <Col xs={2}>
        {isEditing ? (
          <FormControl
            type='number'
            value={newCount}
            onChange={(e) => setNewCount(parseInt(e.target.value, 10))}
            size='sm'
          />
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
          <>
            <Button
              variant='outline-primary'
              size='sm'
              onClick={handleEdit}
              className='mr-2'
            >
              <FontAwesomeIcon icon={faEdit} />
            </Button>
          </>
        )}
      </Col>
    </Row>
  );
};

export default SectionItem;
