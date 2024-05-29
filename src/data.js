const initialData = {
  employees: [
    {
      id: 1,
      name: 'Rofus RockStar',
      link: 'https://randomuser.me/',
      level: 6,
      score: 24,
      picture: 'https://randomuser.me/api/portraits/men/1.jpg',
      title: 'Software Engineer',
      location: 'San Francisco, CA',
    },
    {
      id: 2,
      name: 'Jane Doe',
      link: 'https://randomuser.me/',
      level: 5,
      score: 20,
      picture: 'https://randomuser.me/api/portraits/women/2.jpg',
      title: 'Project Manager',
      location: 'New York, NY',
    },
    {
      id: 3,
      name: 'John Smith',
      link: 'https://randomuser.me/',
      level: 7,
      score: 30,
      picture: 'https://randomuser.me/api/portraits/men/3.jpg',
      title: 'DevOps Engineer',
      location: 'Austin, TX',
    },
    {
      id: 4,
      name: 'Alice Johnson',
      link: 'https://randomuser.me/',
      level: 4,
      score: 18,
      picture: 'https://randomuser.me/api/portraits/women/4.jpg',
      title: 'Product Manager',
      location: 'Seattle, WA',
    },
    {
      id: 5,
      name: 'Bob Brown',
      link: 'https://randomuser.me/',
      level: 3,
      score: 15,
      picture: 'https://randomuser.me/api/portraits/men/5.jpg',
      title: 'UX Designer',
      location: 'Los Angeles, CA',
    },
    {
      id: 6,
      name: 'Charlie Davis',
      link: 'https://randomuser.me/',
      level: 2,
      score: 10,
      picture: 'https://randomuser.me/api/portraits/men/6.jpg',
      title: 'Intern',
      location: 'Chicago, IL',
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

export const fetchDataFromServer = async (employeeId = null) => {
  if (employeeId) {
    const employee = initialData.employees.find(
      (e) => e.id === parseInt(employeeId)
    );
    return {
      employee,
      sections: initialData.sections,
    };
  }
  return {
    employees: initialData.employees,
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
