import React, { useState } from 'react';
import Data from './Utils/Data';
import Card from './Components/Card';
import Buttons from './Components/Button';

import './App.css';


const App = () => {
  const [item, setItem] = useState(Data);

  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };

  return (
    <div>
        <div className='container-fluid'>
          <div className='row'>
            <h1 className='text-3xl text-center font-bold'>Our Menu</h1>
            <Buttons 
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
            <Card item={item} />
          </div>
        </div>
    </div>
  );
}

export default App;