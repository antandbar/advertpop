import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import { getAdverts } from '../service';
import Advert from './Advert';
import AdvertsFilter from './AdvertsFilter';
import Page from '../../layout/Page';
import './AdvertsPage.css';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Crea tu primer anuncio!</p>
    <Button as={Link} to="/adverts/new" variant="primary">
      Anuncio
    </Button>
  </div>
);

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [isSaleFilter, setIsSaleFilter] = useState('');
  const [rangeFilter, setRangeFilter] = useState('');
  const [isFilter, setIsFilter] = useState('all');
  const [multiSelectorFilter, setMultiSelectorFilter] = useState([]);

  const changeNameFilter = name => {
    setNameFilter(name);
  };
  const changeIsSaleFilter = isSale => {
    setIsSaleFilter(isSale);
  };
  const changeRangeFilter = range => {
    setRangeFilter(range);
  };
  const changeMultiSelector = multiSelector => {
    setMultiSelectorFilter(multiSelector);
  };
  const sendAllFilters = () => {
    query();
    setIsFilter(true);
  };

  useEffect(() => {
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const query = () => {
    getAdverts(nameFilter, isSaleFilter, rangeFilter, multiSelectorFilter).then(adverts => setAdverts(adverts));
  };

  return (
    <Page title="Anuncios">
      <div>
        {adverts.length || isFilter ? (
          <Fragment>
            <AdvertsFilter
              changeNameFilter={changeNameFilter}
              sendAllFilters={sendAllFilters}
              changeIsSaleFilter={changeIsSaleFilter}
              changeRangeFilter = {changeRangeFilter}
              changeMultiSelector = {changeMultiSelector}
            />
            <ul>
              {adverts.map(advert => (
                <li key={advert.id}>
                  <Link to={`/adverts/${advert.id}`}>
                  <Advert {...advert} />
                  </Link>
                </li>
              ))}
            </ul>
          </Fragment>
        ) : (
          <EmptyList />
        )}
      </div>
    </Page>
  );
};

export default AdvertsPage;
