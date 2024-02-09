import React, { useState } from 'react';
import category from './databases/category'; // Adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css';

const Home_page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showCategoryList, setShowCategoryList] = useState(false);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setShowCategoryList(false);
  };

  const handleToggleCategoryList = () => {
    setShowCategoryList(!showCategoryList);
  };

  return (
    <>
      <div className='text-center mx-auto p-5 m-5' style={{ maxWidth: '500px' }}>
        <div className='card-body shadow-lg p-5'>
          <h5 className='card-title mb-4 fs-2 py-4 fw-bold'>{selectedCategory || 'Select a category'}</h5>
          <div className='input-group mb-3 mx-auto' style={{ maxWidth: '80%' }}>
            <div className='input-group-append mx-auto'>
              <button
                className='btn btn-outline-success fs-3'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#categoryCollapse'
                aria-expanded='false'
                aria-controls='categoryCollapse'
                onClick={handleToggleCategoryList}
              >
                {selectedCategory || 'Category'}
              </button>
            </div>
          </div>
          <div className={`collapse ${showCategoryList ? 'show' : ''}`} id='categoryCollapse'>
            <div className='card-body mx-auto'>
              <ul className='list-group text-center fs-4 list-group-flush' style={{ width: '80%', margin: 'auto', padding: '10px' }}>
                {category.map((categoryItem) => (
                  <li
                    key={categoryItem.id}
                    className='list-group-item'
                    onClick={() => handleSelectCategory(categoryItem.name)}
                    style={{ cursor: 'pointer' }}
                  >
                    {categoryItem.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className='card-text mt-4 fs-3'>
            {selectedCategory
              ? category.find((categoryItem) => categoryItem.name === selectedCategory).description
              : 'Select a category to view description.'}
          </p>
        </div>
      </div>
    </>
  );
};

export default Home_page;
