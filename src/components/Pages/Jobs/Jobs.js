import React, { useState } from 'react';
import './Jobs.css';

const Jobs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobListings, setJobListings] = useState([
    // Dummy job listings data for demonstration
    { id: 1, title: 'Frontend Developer', company: 'ABC Company', location: 'New York' },
    { id: 2, title: 'Backend Developer', company: 'XYZ Corporation', location: 'San Francisco' },
    { id: 3, title: 'Full Stack Developer', company: '123 Inc.', location: 'Chicago' },
    // Add more job listings as needed
  ]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
    console.log('Search Query:', searchQuery);
    // Reset search query
    setSearchQuery('');
  };

  const handleApply = (jobId) => {
    // Handle the apply button click for a specific job listing
    console.log('Apply Button Clicked for Job ID:', jobId);
    // Add your apply logic here
  };

  return (
    <div className="job-page">
      <h1 className="h1">Job Search</h1>
      <form className="search-form" onSubmit={handleSearchSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Search Jobs"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="job-listings">
        <h2>Job Listings</h2>
        <div className="job-column">
          {jobListings.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button className="apply-button" onClick={() => handleApply(job.id)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="job-offers">
        <h2>Part-time Jobs</h2>
        <div className="job-column">
          {jobListings.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button className="apply-button" onClick={() => handleApply(job.id)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="recommended-jobs">
        <h2>Recommended Jobs</h2>
        <div className="job-column">
          {jobListings.map((job) => (
            <div key={job.id} className="job-card">
              <h3>{job.title}</h3>
              <p>{job.company}</p>
              <p>{job.location}</p>
              <button className="apply-button" onClick={() => handleApply(job.id)}>
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;