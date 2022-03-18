import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../layout/Page';
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

const AdvertsPage = ({ color }) => {
  const [adverts, setAdverts] = useState([]);
  const [nameFilter, setNameFilter] = useState('');

  const changeNameFilter = name => {
    setNameFilter(name);
  };

  useEffect(() => {
    getAdverts(nameFilter).then(adverts => setAdverts(adverts));
  }, [nameFilter]);

  return (
    <div>
      <Title title={'Anuncios'} />
      <AdvertsFilter changeNameFilter={changeNameFilter}></AdvertsFilter>
      {/* {console.log(color)} */}
      {adverts.length ? (
        <ul>
          {adverts.map(advert => (
            <li key={advert.id}>
              {/* <Link to={`/tweets/${tweet.id}`}> */}
              <Advert {...advert} />
              {/* </Link> */}
            </li>
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

export default AdvertsPage;
