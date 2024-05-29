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

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <EmployeeHeader
        name={employee.name}
        link={employee.link}
        level={employee.level}
        score={employee.score}
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
      {sections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          items={section.items}
          onUpdate={(i, value) => {
            const newSections = [...sections];
            newSections[index].items[i].count = value;
            setSections(newSections);
          }}
        />
      ))}
    </>
  );
};

export default EmployeeDetailPage;
