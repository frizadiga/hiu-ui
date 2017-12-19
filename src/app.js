// require('./js/app.js');
import './scss/app.scss';

(process.env.NODE_ENV !== 'production')?require('../ex/app.html'):null;

if (process.env.NODE_ENV !== 'production') {
  console.log('NODE_ENV: Development mode!');
}else{
  console.log('NODE_ENV: Production mode!');
}

const i = require('./js/app.js');
i('0.0.2');