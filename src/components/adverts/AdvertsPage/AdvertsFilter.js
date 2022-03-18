import React from 'react';
import InputSearch from '../../common/InputSearch';
import './AdvertsFilter.css';

const AdvertsFilter = () => {
  return <div className='filter'>
      <div className='filter-title'>
          <h4>Filtros</h4>
      </div>
      <div className='filter-body'>
      <InputSearch label={"Nombre"}></InputSearch>
      </div>
  </div>;
};

export default AdvertsFilter;
