import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Page from '../../layout/Page';
import Button from '../../common/Button';
import { getAdverts } from '../service';
import Advert from './Advert';

import './AdvertsPage.css';

const EmptyList = () => (
  <div style={{ textAlign: 'center' }}>
    <p>Be the first twitter!</p>
    <Button as={Link} to="/tweets/new" variant="primary">
      Tweet
    </Button>
  </div>
);

const AdvertsPage = () => {
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    getAdverts().then(adverts => setAdverts(adverts));
  }, []);

  return (
    <Page title="Anuncios">
    <div>
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
    </Page>
  );
};

export default AdvertsPage;
