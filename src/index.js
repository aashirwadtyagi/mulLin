const i18next = require('i18next');
const Backend = require('i18next-fs-backend');

const initI18n = (language) => {
  return i18next
    .use(Backend)
    .init({
      lng: language,
      fallbackLng: 'en',
      backend: {
        loadPath: __dirname + '/Languages/{{lng}}.json',
      },
    });
};

const translate = async (key, language = 'en') => {
  await initI18n(language);
  return i18next.t(key);
};

module.exports = {
  translate,
};
