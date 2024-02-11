import React, { useState, useEffect } from 'react';
import category from './databases/category';
import catalog from './databases/catalog';
import StoryModal from './StoryModal';


import './Home_page.css';

const Home_page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryList, setShowCategoryList] = useState(false);
  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCommunityOpen, setIsCommunityOpen] = useState(false);

  const toggleCommunity = () => {
    setIsCommunityOpen(!isCommunityOpen);
  };

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowCategoryList(false);
  };

  const handleToggleCategoryList = () => {
    setShowCategoryList(!showCategoryList);
  };

  const openInNewWindow = (url) => {
    window.open(url, '_blank');
  };
  
  const openModal = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutsideModal = (event) => {
      if (event.target.className === 'popup-box') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('click', handleClickOutsideModal);
    }

    return () => {
      document.removeEventListener('click', handleClickOutsideModal);
    };
  }, [isModalOpen]);

  const getCategoryImage = () => {
    const selectedCategoryObject = category.find((categoryItem) => categoryItem.name === selectedCategory);
    return selectedCategoryObject ? selectedCategoryObject.image : 'https://img.freepik.com/premium-photo/silhouette-young-women-birds_488220-10591.jpg';
  };
  const openForm = () => {
    // Open the specified link when the button is clicked
    window.open('https://forms.gle/PvqRknwSYGubfHv47');
  };

  return (
    <div className="home-page-container">
      {/* Tagline heading on the left-center side */}
      <div className="tagline-heading-container">
        <h1 className="tagline-heading">Strength in Every Struggle, Hope in Every Heart</h1>
        <p>Feel is your inclusive online community for mental well-being, offering support, resources, and a safe space to share stories and find inspiration on the journey to healing.</p>
      </div>

      {/* Section 1: Category selection */}
      <section className="category-section">
     
        <div className="text-center mx-auto p-5 m-5" style={{ maxWidth: '500px' }}>
          <div className="card-body shadow-lg p-5">
            <h5 className="card-title mb-4 fs-1  py-4 fw-bolder">{selectedCategory || 'Select a category'}</h5>
            <div className="input-group mb-3 mx-auto" style={{ maxWidth: '80%' }}>
              <div className="input-group-append mx-auto">
                <button
                  className="btn btn-outline-success fs-3"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#categoryCollapse"
                  aria-expanded="false"
                  aria-controls="categoryCollapse"
                  onClick={handleToggleCategoryList}
                >
                  {selectedCategory || 'Category'}
                </button>
              </div>
            </div>
            <div className={`collapse ${showCategoryList ? 'show' : ''}`} id="categoryCollapse">
              <div className="card-body mx-auto" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
                <ul className="list-group text-center fs-4 list-group-flush" style={{ width: '80%', margin: 'auto', padding: '10px' }}>
                  {category.map((categoryItem) => (
                    <li
                      key={categoryItem.id}
                      className="list-group-item"
                      onClick={() => handleSelectCategory(categoryItem.name)}
                      style={{ cursor: 'pointer' }}
                    >
                      {categoryItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="card-text mt-4 fs-3">
              {selectedCategory
                ? category.find((categoryItem) => categoryItem.name === selectedCategory).description
                : 'Select a category to view description.'}
            </p>
          </div>
        </div>
        <div className="button-container">
  <button type="button" className="btn btn-outline-success btn-lg fs-3 fw-Normal mx-3" onClick={() => openForm()}>Add your story</button>
  <div className="dropdown">
      <button class="btn btn-outline-success btn-lg fs-3 fw-Normal mx-3 dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Community Chat
      </button>
      <div class="dropdown-menu  py-4 px-4 " aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item fs-3 px-3" href="#" onClick={() => openInNewWindow('https://chat-app-smriti347.onrender.com/')}>Depression</a>
        <a class="dropdown-item fs-3 px-3" href="#" onClick={() => openInNewWindow('https://chat-app-smriti347.onrender.com/')}>Anxiety</a>
        <a class="dropdown-item fs-3 px-3" href="#" onClick={() => openInNewWindow('https://chat-app-smriti347.onrender.com/')}>Study</a>
      </div>
    </div>
</div>

      </section>
       
      <section className="catalog-section">
       
        <h1 className="heading-for-stories">Stories</h1>
        <div className="row">
          {catalog.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card shadow-sm" style={{ width: '450px' }}>
                <div className="card-body py-5 px-2 m-5">
                  <h5 className="card-title fs-2 fw-bold">{item.heading}</h5>
                  <p className="card-text fs-4">{`${item.story.substring(0, 100)}...`}</p>
                  <button
                    type="button"
                    className="btn btn-success fs-4 px-3"
                    onClick={() => openModal(item.story)}
                  >
                    Story 
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="background-image p-3" style={{ backgroundImage: `url(${getCategoryImage()})` }}></div>
      

      <div className='right-bottom position-fixed chatbot-icon' style={{ bottom: '10px', right: '10px' }}>
        <a href="https://65c7bee279610793254c6dc9--incomparable-bombolone-800cda.netlify.app/" target="_blank" rel="noopener noreferrer">
          <img
            src="logos.jpg"
            alt="Chatbot Icon"
            className='p-1 m-1'
            style={{ width: '100px', height: '100px', borderRadius: '50%', cursor: 'pointer' }}
          />
        </a>
      </div>

      {isModalOpen && <StoryModal story={selectedStory} onClose={closeModal} />}
    </div>
  );
};

export default Home_page;
