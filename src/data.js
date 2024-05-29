const initialData = {
  employees: [
    {
      id: 1,
      name: 'Rofus RockStar',
      link: 'https://quip-amazon.com/',
      level: 6,
      score: 24,
    },
    {
      id: 2,
      name: 'Jane Doe',
      link: 'https://quip-amazon.com/',
      level: 5,
      score: 20,
    },
    {
      id: 3,
      name: 'John Smith',
      link: 'https://quip-amazon.com/',
      level: 7,
      score: 30,
    },
    {
      id: 4,
      name: 'Alice Johnson',
      link: 'https://quip-amazon.com/',
      level: 4,
      score: 18,
    },
    {
      id: 5,
      name: 'Bob Brown',
      link: 'https://quip-amazon.com/',
      level: 3,
      score: 15,
    },
  ],
  sections: [
    {
      title: 'Body of Work Alignment',
      items: [
        { name: 'BOW Aligned to TAP', count: 1 },
        { name: 'Technical Architecture References', count: 1 },
        { name: 'Measurable Success Criteria', count: 1 },
      ],
    },
    {
      title: 'Customer Advisor',
      items: [
        { name: 'Customer Met Quota', count: 1 },
        { name: 'Owns The Designs', count: 1 },
        { name: 'Build internal communities and networks', count: 1 },
      ],
    },
    {
      title: 'Thought Leadership',
      items: [
        { name: 'Teach Lessons Learned', count: 1 },
        { name: 'Develop Technical Content', count: 1 },
        { name: 'Partner Across orgs & Identify Gaps', count: 1 },
      ],
    },
    {
      title: 'Advancing Org Capabilities',
      items: [
        { name: 'Strategic Guidance', count: 1 },
        { name: 'Speaking Engagement', count: 1 },
        { name: 'Gather Customer Feedback', count: 1 },
      ],
    },
    {
      title: 'Continuous Professionalism',
      items: [
        { name: 'Collab Product Eng/PFR/CI', count: 1 },
        { name: 'Ensure Customer Reqs are met', count: 1 },
        { name: 'Active member in SA Events/deep racer/unicorn gym', count: 1 },
      ],
    },
  ],
};

export const fetchDataFromServer = async (employeeId) => {
  const employee = initialData.employees.find(
    (e) => e.id === parseInt(employeeId)
  );
  return {
    employee,
    sections: initialData.sections,
  };
};

export const fetchAIAdvice = async (employeeId) => {
  // Mock AI advice data
  return {
    summary: 'You are performing exceptionally well. Keep up the great work!',
    tips: [
      'Continue to align your work with strategic objectives.',
      'Enhance your customer advisory skills.',
      'Share your technical knowledge with peers.',
    ],
    personalizedRecommendations: [
      'Focus on developing more technical content.',
      'Participate in more speaking engagements.',
      'Gather more customer feedback to improve services.',
    ],
  };
};
