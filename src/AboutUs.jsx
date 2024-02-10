import React from 'react';
import './AboutUs.css'; // Import CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-text">
        <h2 className="about-us-heading">About Us</h2>
        <div className="about-us-content">
          <p>
            <strong>Strength in Every Struggle, Hope in Every Heart</strong>
          </p>
          <p>
            With its vast population and diverse demographics, India confronts a substantial mental health burden that warrants urgent attention. Mental health in India is still a fairly new topic, and the mental health myths and taboos attached to this subject are prevalent to this date. India is the world’s suicide capital with over 2.6 lakh cases of suicide in a year. WHO statistics say the average suicide rate in India is 10.9 for every lakh people. Ignorance and Lack of Help are some of the factors that contribute to this alarming statistics.
          </p>
          <p>
            Statistics show that 1 in every 5 individuals suffers from some form of mental health illness symptoms. 50% of mental health conditions begin by age 14, and 75% of mental health conditions develop by age 24.
          </p>
          <p>
            Many individuals face similar traumatic experiences or conditions, which can significantly impact their mental well-being. However, finding a supportive community of peers who understand these challenges and can provide meaningful support can be difficult. Additionally, accessing relevant government resources and services to aid in recovery and coping may not always be straightforward.
          </p>
          <p>
            WellConnect aims to foster understanding, support, and resource accessibility for mental well-being, empowering individuals on their journey to healing and resilience. The platform serves as a central hub where users connect with peers, share stories, and access tailored resources. A chatbot feature offers instant support, and future plans include collaboration with government agencies.
          </p>
        </div>
      </div>
      <div className="about-us-image">
        <img src="xyz.jpg" alt="About Us" />
      </div>
    </div>
  );
};

export default AboutUs;