import React, { useState } from 'react';
import category from './databases/category'; // Adjust the path accordingly
import 'bootstrap/dist/css/bootstrap.min.css';

const Home_page = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <>
    <div className='my-5 pt-5'></div>
<div className='container my-5 pt-5'>
      <div className='card text-center mx-auto' style={{ maxWidth: '500px' }}>
        <div className='card-body p-5'>
          <h5 className='card-title mb-4'>{selectedCategory || 'Select a category'}</h5>
          <div className='input-group mb-3'>
            <input
              type='text'
              className='form-control'
              placeholder='Search...'
              aria-label='Search'
              aria-describedby='button-addon2'
            />
            <div className='input-group-append'>
              <button
                className='btn btn-outline-secondary'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#categoryCollapse'
                aria-expanded='false'
                aria-controls='categoryCollapse'
              >
                {selectedCategory || 'Category'}
              </button>
            </div>
          
          </div>
          <div className='collapse' id='categoryCollapse'>
            <div className='card card-body'>
              <ul className='list-group'>
                {category.map((categoryItem) => (
                  <li
                    key={categoryItem.id}
                    className='list-group-item'
                    onClick={() => handleSelectCategory(categoryItem.name)}
                  >
                    {categoryItem.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className='card-text mt-4'>
            {selectedCategory
              ? category.find((categoryItem) => categoryItem.name === selectedCategory).description
              : 'Select a category to view description.'}
          </p>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default Home_page;
