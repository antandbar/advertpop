import { useEffect } from 'react';
import Button from '../../common/Button';
import InputSearch from '../../common/InputSearch';
import './AdvertsFilter.css';

const AdvertsFilter = ({ changeNameFilter, sendAllFilters }) => {
  useEffect(() => {
    /* getAdverts().then(adverts => setAdverts(adverts)); */
  }, []);

  const handleInputName = e => {
    changeNameFilter(e.target.value);
  };
  const sendFilters = e => {
    e.preventDefault();
    sendAllFilters();
  };

  return (
    <div className="filter">
      <div className="filter-title">
        <h4>Filtros</h4>
      </div>
      <div className="filter-body">
        <InputSearch onChange={handleInputName} label={'Nombre'}></InputSearch>
        <Button
          className="filter-submit"
          variant="primary"
          /* disabled={!email || !password || isLoading} */
          onClick={sendFilters}
        >
          Filtrar
        </Button>
      </div>
    </div>
  );
};

export default AdvertsFilter;
