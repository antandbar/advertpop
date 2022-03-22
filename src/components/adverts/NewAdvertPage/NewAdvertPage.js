import { useState, useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import Page from '../../layout/Page';
import Button from '../../common/Button';
import InputSearch from '../../common/InputSearch';
import InputRadio from '../../common/InputRadio';
import TextArea from '../../common/MultiSelector';
import { getTags } from '../service';
import InputNumber from '../../common/InputNumber';
import InputFile from '../../common/InputFile';
//import './NewTweetPage.css';

const NewAdvertPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [createdTweet, setCreatedTweet] = useState(null);
  const [name, setName] = useState(null);
  const [isSale, setIsSale] = useState(null);
  const [multiSector, setMultiselector] = useState(null);
  const [tags, setTags] = useState([]);
  const [inputNumber, setInputNumber] = useState(null);
  const [inputFile, setInputFile] = useState(null);

  useEffect(() => {
    getTags().then(tags => setTags(tags));
  }, []);

  const handleChange = event => {
    setContent(event.target.value);
  };

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

    setInputNumber(e.target.value);
  };

  const handleInputfile = e => {
    setInputFile(e.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    /*     try {
      const tweet = await createTweet({ content });
      setCreatedTweet(tweet);
      navigate(`/tweets/${createdTweet.id}`);
    } catch (error) {
      setError(error);
    } */
  };

  if (createdTweet) {
    return <Navigate to={`/tweets/${createdTweet.id}`} />;
  }

  if (error?.status === 401) {
    return <Navigate to="/login" />;
  }

  return (
    <Page title="Crear Anuncio">
      <div className="NewAdvertPage">
        <form onSubmit={handleSubmit}>
          <InputSearch
            onChange={handleInputName}
            label={'Nombre'}
          ></InputSearch>
          <InputRadio
            onChange={handleInputBuySell}
            label={'Compra/Venta'}
            valueObjet={saleObjet}
          />
          <TextArea
            tags={tags}
            handleMultiSelector={handleMultiSelector}
            label={'Tags'}
          />
          <InputNumber
            label={'Precio'}
            defaultValue={0}
            max={10000}
            min={0}
            onChange={handleInputNumber}
          />
          <InputFile label={'Foto'} onChange={handleInputfile} />
          <div className="newTweetPage-footer">
            <Button
              type="submit"
              className="newAdvertPage-submit"
              variant="primary"
              //disabled={buttonDisabled}
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
