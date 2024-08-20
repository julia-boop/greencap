import Home from './components/Home/Home';
import './App.css';
// import {useTranslation} from 'react-i18next';

const App = () => {
  // const {t, i18n} = useTranslation();

  // const changeLanguage= (lng) => {
  //   i18n.changeLanguage(lng);
  // }

  return (
    <div className="App">
      <Home/>
    </div>
  );

}

export default App;


    {/* <div>
        <button onClick={() => changeLanguage('en')}>Translate to english</button>
        <button onClick={() => changeLanguage('es')}>Translate to spanish</button>
        <h1>{t('welcome')}</h1>
        <p>{t('description')}</p>
      </div> */}