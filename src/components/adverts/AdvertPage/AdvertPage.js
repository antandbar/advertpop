import Button from '../../common/Button';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Page from '../../layout/Page';
import Advert from '../AdvertsPage/Advert';
import { getAdvert } from '../service';
import './AdvertPage.css';
import Confirmation from '../../common/Confirmation';

const AdvertPage = () => {
  const [advert, setAdvert] = useState(null);
  const { advertId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAdvert(advertId)
      .then(advert => setAdvert(advert))
      .catch(() => {
        navigate('/404');
      });
  }, [advertId, navigate]);

  return (
    <Page title="Detalle del anuncio">
      <Advert {...advert} />
      <div className="advertPage-div-button">
        <Button variant="delete"> Eliminar </Button>
        <Confirmation label={"Está seguro de elminar el anuncio?"}/>
      </div>
    </Page>
  );
};

export default AdvertPage;
