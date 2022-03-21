import { useEffect, useState } from 'react';
import Button from '../../common/Button';
import InputRadio from '../../common/inputRadio';
import InputSearch from '../../common/InputSearch';
import SliderBar from '../../common/PriceSliderBar';
import './AdvertsFilter.css';

const AdvertsFilter = ({
  changeNameFilter,
  sendAllFilters,
  changeIsSaleFilter,
  changeRangeFilter
}) => {
  useEffect(() => {
    /* getAdverts().then(adverts => setAdverts(adverts)); */
  }, []);
  const [val, setVal] = useState([3000, 6000]);

  const handleInputName = e => {
    changeNameFilter(e.target.value);
  };
  const handleInputBuySell = e => {
    changeIsSaleFilter(e.target.value);
  };
  const sendFilters = e => {
    e.preventDefault();
    sendAllFilters();
  };

  const updateRange = (e, data) => {
    setVal(data);
    changeRangeFilter(data);
  };

  const saleObjet = {
    false: 'compra',
    true: 'venta',
    all: 'todos',
  };

  return (
    <div className="filter">
      <div className="filter-title">
        <h4>Filtros</h4>
      </div>
      <div className="filter-body">
        <InputSearch onChange={handleInputName} label={'Nombre'}></InputSearch>
        <InputRadio
          onChange={handleInputBuySell}
          label={'Compra/Venta'}
          valueObjet={saleObjet}
        />
        <SliderBar
          label={'Rango de precios'}
          maxSelected={6000}
          minSelected={3000}
          onChange={updateRange}
          value={val}
        />
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
