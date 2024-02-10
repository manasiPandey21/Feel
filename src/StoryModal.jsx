// StoryModal.jsx
import React from 'react';

const StoryModal = ({ story, onClose }) => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={onClose}>x</span>
        <div className="story-content">
          <h2>Full Story</h2>
          <p>{story}</p>
        </div>
      </div>
    </div>
  );
};

export default StoryModal;
