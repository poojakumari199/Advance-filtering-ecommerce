import React from 'react';
import './Color.css';
import Input from '../../components/input'

const Color = ({handleChange}) => {
    return (
        <div >
            <h2 className="sidebar-title color-title">Colors</h2>
            <label className="sidebar-label-container">
                  <input onChange={handleChange} type="radio" value=""  name="test1" />
              <span className="checkmark all"></span>All
              </label>  
              <Input 
              handleChange={handleChange}
               value="black"
               title="black"
               name="test1"
               color="black"
              />
              <Input 
              handleChange={handleChange}
               value="Blue"
               title="Blue"
               name="test1"
               color="Blue"
              />
              <Input 
              handleChange={handleChange}
               value="Red"
               title="Red"
               name="test1"
               color="Red"
              />
               <label className="sidebar-label-container">
             <input type="radio" onChange={handleChange} value="white" name="test" />
              <span className="checkmark" 
              style={{background:"white",
               border:"2px solid black"}}>

               </span>white
              </label>
              <Input 
              handleChange={handleChange}
               value="Green"
               title="Green"
               name="test1"
               color="black"
              />
             
        </div>
    )
}

export default Color
