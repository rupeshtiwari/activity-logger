import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import EmployeeHeader from '../components/EmployeeHeader';
import Section from '../components/Section';
import AIAssistant from '../components/AIAssistant';
import SectionGraph from '../components/SectionGraph';
import { fetchDataFromServer } from '../data';
import { Container, Spinner, Row, Col } from 'react-bootstrap';

const EmployeeDetailPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const data = await fetchDataFromServer(id);

      // Load stored data from local storage
      const storedData = JSON.parse(localStorage.getItem('sectionData')) || {};
      const updatedSections = data.sections.map((section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          count:
            storedData[item.name] !== undefined
              ? storedData[item.name]
              : item.count,
        })),
      }));

      setEmployee(data.employee);
      setSections(updatedSections);
      setLoading(false);
    };

    fetchEmployeeData();
  }, [id]);

  const calculateTotalScore = (sections) => {
    return sections.reduce((total, section) => {
      return total + section.items.reduce((sum, item) => sum + item.count, 0);
    }, 0);
  };

  const handleUpdate = (sectionIndex, itemIndex, newCount) => {
    const updatedSections = sections.map((section, secIdx) => {
      if (secIdx === sectionIndex) {
        const updatedItems = section.items.map((item, itemIdx) =>
          itemIdx === itemIndex ? { ...item, count: newCount } : item
        );
        return { ...section, items: updatedItems };
      }
      return section;
    });
    setSections(updatedSections);

    // Save to local storage
    const storedData = JSON.parse(localStorage.getItem('sectionData')) || {};
    storedData[sections[sectionIndex].items[itemIndex].name] = newCount;
    localStorage.setItem('sectionData', JSON.stringify(storedData));

    // Update the total score
    const updatedTotalScore = calculateTotalScore(updatedSections);
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      score: updatedTotalScore,
    }));
  };

  if (loading) {
    return <Spinner animation='border' />;
  }

  return (
    <Container className='mt-5'>
      <div className='card'>
        <div className='card-header'>
          <h3>Employee Scorecard</h3>
        </div>
        <div className='card-body'>
          <Row>
            <Col md={12}>
              <EmployeeHeader
                name={employee.name}
                link={employee.link}
                level={employee.level}
                score={employee.score}
              />
            </Col>
          </Row>
          <hr />
          <SectionGraph sections={sections} />
          <Row>
            <Col md={12}>
              <AIAssistant employeeId={id} />
            </Col>
          </Row>
          <hr />
          {sections.map((section, sectionIndex) => (
            <Section
              key={sectionIndex}
              title={section.title}
              items={section.items}
              onUpdate={(itemIndex, newCount) =>
                handleUpdate(sectionIndex, itemIndex, newCount)
              }
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default EmployeeDetailPage;
