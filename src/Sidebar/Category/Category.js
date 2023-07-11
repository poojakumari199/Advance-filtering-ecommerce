import React from 'react';
import './Category.css';
import Input from '../../components/input'

const Category = ({handleChange}) => {
    return (
        <div >
            <h2 className="sidebar-title price-title1">Category</h2>
            {/* <div> */}
              <label className="sidebar-label-container">
                  <input onChange={handleChange} type="radio" value=""  name="test" />
              <span className="checkmark"></span>All
              </label>
              <Input 
              handleChange={handleChange}
              value="Sneakers"
              title="Sneakers"
              name="test"
              />
              <Input 
              handleChange={handleChange}
              value="flats"
              title="flats"
              name="test"
              />
              <Input 
              handleChange={handleChange}
              value="sandle"
              title="sandle"
              name="test"
              />
            {/* </div> */}
        </div>
    )
}

export default Category
