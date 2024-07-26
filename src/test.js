const { translate } = require('./index');

const test = async () => {
  console.log(await translate('loginheader', 'hin'));
};

test();
