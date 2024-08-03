import React, { useState, useEffect } from 'react';
import './EarningScreen.css';
import Sidebar from './Components/Sidebar';
import HomeHeader from './HomeComonent/HomeHeader';

function Jobs() {
  const [message, setMessage] = useState('');
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Simulate an API call to fetch jobs
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      // Replace with your API endpoint
      const response = await fetch('https://api.example.com/jobs');
      const data = await response.json();
      setJobs(data);
    } catch (err) {
      setError('Failed to fetch jobs.');
    } finally {
      setLoading(false);
    }
  };

  const handleWithdrawClick = () => {
    setMessage('Your withdraw request has been submitted');
  };

  return (
    <div>
      <HomeHeader />
      <div className='app'>
        <Sidebar />
        <div className="jobs">
          <div className="jobs-header">
            <h2>Completed Jobs</h2>
            <button
              style={{ background: 'transparent', color: 'black', width: '110px', border: '1px solid black', borderRadius: '1px' }}
              className="withdraw-btn"
              onClick={handleWithdrawClick}
            >
              Withdraw
            </button>
          </div>
          {message && <p className="withdraw-message">{message}</p>}
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p className="no-earnings">No earnings available</p>
          ) : jobs.length === 0 ? (
            <p className="no-earnings">No earnings available</p>
          ) : (
            <table className="jobs-table">
              <thead>
                <tr>
                  <th>Service</th>
                  <th>Date & Time</th>
                  <th>Total</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {jobs.map((job, index) => (
                  <tr key={index}>
                    <td className="service-cell">
                      <img src={job.profile} alt="Profile" className="profile-pic" />
                      <div>
                        <p>{job.service}</p>
                        <p>Service by: {job.provider} <span className="view-profile">View Profile</span></p>
                      </div>
                    </td>
                    <td>
                      <p>{job.startDate}</p>
                      <p>{job.endDate}</p>
                    </td>
                    <td>{job.rate}</td>
                    <td><span className="status completed">{job.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobs;
