import React from 'react';
import p from "./databases/psychatrics";
import './Psychatrics.css'; // Import your CSS file

const Psychatrics = () => {
  return (
    <div className="container px-5">
      <div className="row">
        {p.map((psychiatrist) => (
          <div key={psychiatrist.id} className="col-md-4 mb-4 ">
            <div className="card equal-height mx-5 shadow-lg" style={{ width: '35rem', margin: '0.5rem' }}>
              <img src={psychiatrist.image} className="card-img-top equal-image" alt={`${psychiatrist.name} Image`} />
              <div className="card-body px-3 mx-3">
                <h5 className="card-title">{psychiatrist.name}</h5>
                <p className="card-text">{psychiatrist.specialization}</p>
              </div>
              <ul className="list-group list-group-flush no-border">
                <li className="list-group-item list-item-qualifications">
                  <span className='fw-bold'>Qualifications: </span>{psychiatrist.qualifications}
                </li>
                <li className="list-group-item">
                  <span className='fw-bold'>Achievements: </span>{psychiatrist.achievements}
                </li>
              </ul>
              <div className="card-body ">
                <a href={psychiatrist.website} className="card-link" target="_blank" rel="noopener noreferrer">Website</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Psychatrics;
