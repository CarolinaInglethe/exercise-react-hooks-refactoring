// src/context/Provider.js

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const [ state , setstate ] = useState({
    cars: {
      redCar: false,
      blueCar: false,
      yellowCar: false,
    }
  });

  const cars = 'cars'


  const moveCar = (car, side) => {
    setstate({
      ...state,
      [cars]: { [car]: side, }
    });
  }; 


    const context = {
      ...state,
      moveCar: moveCar,
    };


    return (
      <CarsContext.Provider value={context}>
        {children}
      </CarsContext.Provider>
    );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.string,
    PropTypes.object,
  )
}

export default Provider
