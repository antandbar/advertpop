import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Page from '../../layout/Page';
import Button from '../../common/Button';
import InputSearch from '../../common/InputSearch';
import InputRadio from '../../common/InputRadio';
import TextArea from '../../common/MultiSelector';
import { createAdvert, getTags } from '../service';
import InputNumber from '../../common/InputNumber';
import InputFile from '../../common/InputFile';
//import './NewTweetPage.css';

const NewAdvertPage = () => {
  const navigate = useNavigate();
  const [name, setName] = useState(null);
  const [isSale, setIsSale] = useState(null);
  const [multiSelector, setMultiselector] = useState(null);
  const [tags, setTags] = useState([]);
  const [price, setPrice] = useState(null);
  const [inputFile, setInputFile] = useState(null);

  useEffect(() => {
    getTags().then(tags => setTags(tags));
  }, []);

  const handleInputName = e => {
    setName(e.target.value);
  };

  const handleInputBuySell = e => {
    setIsSale(e.target.value);
  };

  const saleObjet = {
    false: 'compra',
    true: 'venta',
  };
  const handleMultiSelector = e => {
    let valueMultiSelector = Array.from(
      e.target.selectedOptions,
      option => option.value,
    );
    setMultiselector(valueMultiSelector);
  };

  const handleInputNumber = e => {
    if (e.target.value > 10000) {
      e.target.value = 10000;
    }
    if (e.target.value < 0) {
      e.target.value = 0;
    }

    setPrice(e.target.value);
  };

  const handleInputfile = e => {
    setInputFile(e.target.files[0]);
  };

  const advertFormData = () => {
    const advertFormData = new FormData();
    advertFormData.append('name', name);
    advertFormData.append('sale', isSale);
    advertFormData.append('price', price);
    advertFormData.append('tags', multiSelector);
    if (inputFile) advertFormData.append('photo', inputFile);
    return advertFormData;
  };
  const handleSubmit = async event => {
    event.preventDefault();

    createAdvert(advertFormData()).then(advertResp => {
      let advert = advertResp;
      navigate(`/adverts/${advert.id}`);
    });
  };

  return (
    <Page title="Crear Anuncio">
      <div className="NewAdvertPage">
        <form onSubmit={handleSubmit}>
          <InputSearch
            onChange={handleInputName}
            label={'Nombre'}
            required
          ></InputSearch>
          <InputRadio
            onChange={handleInputBuySell}
            label={'Compra/Venta'}
            valueObjet={saleObjet}
            required
          />
          <TextArea
            tags={tags}
            handleMultiSelector={handleMultiSelector}
            label={'Tags'}
            required
          />
          <InputNumber
            label={'Precio(€)'}
            max={10000}
            min={0}
            onChange={handleInputNumber}
            required
          />
          <InputFile label={'Foto'} onChange={handleInputfile} />
          <div className="newTweetPage-footer">
            <Button
              type="submit"
              className="newAdvertPage-submit"
              variant="primary"
              disabled={
                !name ||
                !price ||
                isSale === null ||
                multiSelector === null ||
                multiSelector?.length === 0
              }
            >
              Crear Anuncio
            </Button>
          </div>
        </form>
      </div>
    </Page>
  );
};

export default NewAdvertPage;
