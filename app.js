const { info, warm, error } = require('./utils/logger');

info('It`s info', 'green color');
warm('It`s warm', 'yellow color');
error('It`s error', 'red color');