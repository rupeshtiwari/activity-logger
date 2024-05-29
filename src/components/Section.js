import React from 'react';
import { Card } from 'react-bootstrap';
import SectionItem from './SectionItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconConfig from '../iconConfig';

const Section = ({ title, items, onUpdate }) => {
  const icon = iconConfig[title] || iconConfig['default'];

  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>
          <FontAwesomeIcon icon={icon} className='mr-2' /> {/* Example icon */}
          {title}
        </Card.Title>
        {items.map((item, index) => (
          <SectionItem
            key={index}
            name={item.name}
            count={item.count}
            onUpdate={(newCount) => onUpdate(index, newCount)}
          />
        ))}
      </Card.Body>
    </Card>
  );
};

export default Section;
