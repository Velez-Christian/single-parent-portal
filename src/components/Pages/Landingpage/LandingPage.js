import React from 'react';
import './LandingPage.css';


function LandingPage() {
  // Sample data for recommended jobs
  const recommendedJobs = [
    { id: 1, title: 'Human Resource', company: 'Company A' },
    { id: 2, title: 'Manager', company: 'Company B' },
    { id: 3, title: 'Office Staff', company: 'Company C' },
  ];

  const handleApply = (jobId) => {
    // Handle apply button click event
    console.log(`Applying for job with ID ${jobId}`);
  };

  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <h1>Welcome to the Job Portal for Single Parents</h1>
        <p>Find flexible and family-friendly job opportunities</p>
        <div className="search-container">
            <input type="text" placeholder="Enter job title, keyword, or location" />
            <button type="submit">Search</button>
        </div>
        <div className="recommendations">
          <h2>Recommended Jobs</h2>
          <ul className="job-list">
            {recommendedJobs.map((job) => (
              <li key={job.id} className="job-item">
                <div className="job-details">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>
                <button className="apply-button landing" onClick={() => handleApply(job.id)}>
                  Apply
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;