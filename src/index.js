import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

let i18nConfig = {
  locale: 'en',
  messages: localeEsMessages
};

function onChangeLanguage(lang){
  switch (lang) {
      case 'es': i18nConfig.messages = localeEsMessages; break;
      case 'en': i18nConfig.messages = localeEnMessages; break;
      default: i18nConfig.messages = localeEsMessages; break;
  }
  i18nConfig.locale = lang;
}



onChangeLanguage(navigator.language)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <IntlProvider locale={i18nConfig.locale} messages= {i18nConfig.messages}>
  <App/>
</IntlProvider>
);


serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
