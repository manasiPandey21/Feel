import React from 'react';

const Contact = () => {
  return (
    <div className="d-flex justify-content-center vh-50">
      <div className="card shadow px-1 mx-2" style={{ width: "38rem" }}>
        <div className="card-body py-3 my-5 px-5">
          <h5 className="card-title fs-1 fw-bold">Contact Us</h5>
          <h6 className="card-subtitle mb-2 text-muted fs-3 fw-light py-2">We have built a Mental Wellbeing website where you can read real-life stories, explore government programs, benefit from counselors, and interact with a friendly chatbot in a beautiful UI.</h6>
          <p className="card-text fs-3">For any queries or difficulties, you can reach out to us.</p>
          <p className="card-text fs-3"><span className='fw-normal'>Gargee Mesharam : </span>gargee@gmail.com</p>
          <p className="card-text fs-3"><span>Samriddhi Meena : </span>samriddhi@gmail.com</p>
          <p className="card-text fs-3"><span>Smriti Yadav : </span>smritti@gmail.com</p>
          <p className="card-text fs-3"><span>Manasi Pandey : </span>manasi@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
