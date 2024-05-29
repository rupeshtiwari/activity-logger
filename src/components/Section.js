import React from 'react';
import SectionItem from './SectionItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconConfig from '../iconConfig';
import './Section.css';

const Section = ({ title, items, onUpdate }) => {
  return (
    <div className='section mb-4'>
      <h4 className='section-title'>
        <FontAwesomeIcon icon={iconConfig[title]} className='mr-2' />
        {title}
      </h4>
      {items.map((item, index) => (
        <SectionItem
          key={index}
          name={item.name}
          count={item.count}
          onUpdate={(newCount) => onUpdate(index, newCount)}
        />
      ))}
    </div>
  );
};

export default Section;
