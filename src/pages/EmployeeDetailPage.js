import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchDataFromServer } from '../data';
import EmployeeHeader from '../components/EmployeeHeader';
import Section from '../components/Section';
import SummaryGraph from '../components/SummaryGraph';
import AIAssistant from '../components/AIAssistant';

const EmployeeDetailPage = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { employee, sections } = await fetchDataFromServer(id);
      setEmployee(employee);
      setSections(sections);
    };

    fetchData();
  }, [id]);

  const calculateTotalScore = (sections) => {
    return sections.reduce(
      (total, section) =>
        total + section.items.reduce((acc, item) => acc + item.count, 0),
      0
    );
  };

  const handleUpdate = (sectionIndex, itemIndex, newCount) => {
    const newSections = [...sections];
    newSections[sectionIndex].items[itemIndex].count = newCount;
    setSections(newSections);
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  const totalScore = calculateTotalScore(sections);

  return (
    <>
      <EmployeeHeader
        name={employee.name}
        link={employee.link}
        level={employee.level}
        score={totalScore}
        picture={employee.picture}
        title={employee.title}
        location={employee.location}
      />
      <SummaryGraph
        data={{
          labels: sections.map((s) => s.title),
          values: sections.map((s) =>
            s.items.reduce((acc, item) => acc + item.count, 0)
          ),
        }}
      />
      <AIAssistant employeeId={id} />
      {sections.map((section, sectionIndex) => (
        <Section
          key={sectionIndex}
          title={section.title}
          items={section.items}
          onUpdate={(itemIndex, value) =>
            handleUpdate(sectionIndex, itemIndex, value)
          }
        />
      ))}
    </>
  );
};

export default EmployeeDetailPage;
