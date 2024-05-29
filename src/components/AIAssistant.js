import React, { useState, useEffect } from 'react';
import { Card, Spinner } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faThumbsUp,
  faSmile,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import { fetchAIAdvice } from '../data';

const AIAssistant = ({ employeeId }) => {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    const getAdvice = async () => {
      const data = await fetchAIAdvice(employeeId);
      setAdvice(data);
    };

    getAdvice();
  }, [employeeId]);

  return (
    <Card className='mb-4'>
      <Card.Body>
        <Card.Title>
          <FontAwesomeIcon icon={faLightbulb} className='mr-2' />
          Summary and Guidance
        </Card.Title>
        {advice === null ? (
          <Spinner animation='border' />
        ) : (
          <>
            <p>
              <FontAwesomeIcon icon={faSmile} className='mr-2' />
              {advice.summary}
            </p>
            <h5>
              <FontAwesomeIcon icon={faThumbsUp} className='mr-2' />
              Tips
            </h5>
            <ul>
              {advice.tips.map((tip, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faLightbulb} className='mr-2' />
                  {tip}
                </li>
              ))}
            </ul>
            <h5>
              <FontAwesomeIcon icon={faUserCheck} className='mr-2' />
              Personalized Recommendations
            </h5>
            <ul>
              {advice.personalizedRecommendations.map((rec, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon={faLightbulb} className='mr-2' />
                  {rec}
                </li>
              ))}
            </ul>
          </>
        )}
      </Card.Body>
    </Card>
  );
};

export default AIAssistant;
