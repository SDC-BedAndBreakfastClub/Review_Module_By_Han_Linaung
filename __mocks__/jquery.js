const results = require('./data/listing3.json');

const $ = {
  ajax(options) {
    return new Promise((resolve, reject) => {
      options
        ? resolve({ data: results })
        : reject(new Error('Error with request'));
    });
  },
};

export default $;
