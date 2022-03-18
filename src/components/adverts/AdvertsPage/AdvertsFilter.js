import { useEffect } from 'react';
import InputSearch from '../../common/InputSearch';
import './AdvertsFilter.css';

const AdvertsFilter = ({changeNameFilter}) => {

    useEffect(() => {
        /* getAdverts().then(adverts => setAdverts(adverts)); */
      }, []);

      const handleInputName = (e) => {
          changeNameFilter(e.target.value)
          
      }

  return <div className='filter'>
      <div className='filter-title'>
          <h4>Filtros</h4>
      </div>
      <div className='filter-body'>
      <InputSearch onChange={handleInputName} label={"Nombre"}></InputSearch>
      </div>
  </div>
};

export default AdvertsFilter;
