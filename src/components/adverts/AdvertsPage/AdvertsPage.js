import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import { getAdverts } from '../service';
import Advert from './Advert';
import AdvertsFilter from './AdvertsFilter';

import './AdvertsPage.css';
import Title from '../../common/Title';

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
  const [isFilter, setIsFilter] = useState(false);

  const changeNameFilter = name => {
    setNameFilter(name);
  };
  const sendAllFilters = () => {
    query();
    setIsFilter(true);
  };

  useEffect(() => {
    query();
  }, []);

  const query = () => {
    getAdverts(nameFilter).then(adverts => setAdverts(adverts));
  };

  return (
    <div>
      <Title title={'Anuncios'} />

      {adverts.length || isFilter ? (
        <Fragment>
          <AdvertsFilter
            changeNameFilter={changeNameFilter}
            sendAllFilters={sendAllFilters}
          ></AdvertsFilter>
          <ul>
            {adverts.map(advert => (
              <li key={advert.id}>
                {/* <Link to={`/tweets/${tweet.id}`}> */}
                <Advert {...advert} />
                {/* </Link> */}
              </li>
            ))}
          </ul>
        </Fragment>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default AdvertsPage;
