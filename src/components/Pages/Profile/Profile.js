import React from 'react';
import './Profile.css';

const Profile = () => {
  const personalInfo = {
    name: 'John Doe',
    title: 'Software Developer',
    location: 'New York, USA',
    email: 'johndoe@example.com',
    phone: '+1 123-456-7890',
    profileImage: './src/images/profile.jpg', // Replace with actual profile image path
  };

  const workExperience = [
    {
      company: 'ABC Corporation',
      position: 'Full Stack Developer',
      duration: '2018 - 2021',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      company: 'XYZ Corporation',
      position: 'Frontend Developer',
      duration: '2016 - 2018',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ];

  const employerFeedback = [
    {
      company: 'ABC Corporation',
      feedback: 'John is a highly skilled developer who consistently delivered high-quality work. He is a great team player and always willing to go the extra mile to meet project deadlines.',
    },
    {
      company: 'XYZ Corporation',
      feedback: 'It was a pleasure working with John. He has excellent problem-solving skills and contributed valuable insights to our development projects. Highly recommended.',
    },
  ];

  return (
    <div className="profile">
      <div className="personal-info">
        <img src={personalInfo.profileImage} alt="Profile" className="profile-image" />
        <h1 className="name">{personalInfo.name}</h1>
        <h2 className="title">{personalInfo.title}</h2>
        <p className="location">{personalInfo.location}</p>
        <p className="contact">
          <strong>Email:</strong> {personalInfo.email}
        </p>
        <p className="contact">
          <strong>Phone:</strong> {personalInfo.phone}
        </p>
      </div>

      <div className="work-experience">
        <h2>Work Experience</h2>
        {workExperience.map((experience, index) => (
          <div key={index} className="experience-item">
            <h3 className="company">{experience.company}</h3>
            <p className="position">{experience.position}</p>
            <p className="duration">{experience.duration}</p>
            <p className="description">{experience.description}</p>
          </div>
        ))}
      </div>

      <div className="employer-feedback">
        <h2>Employer Feedback</h2>
        {employerFeedback.map((feedback, index) => (
          <div key={index} className="feedback-item">
            <h3 className="company">{feedback.company}</h3>
            <p className="feedback">{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
