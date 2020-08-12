'use strict';

function dogs(axios) {
  return (req, res) => {
    axios
      .get('https://dog.ceo/api/breeds/image/random')
      .then((response) => {
        res.status(200).send(response.data);
      })
      .catch((error) => {
        res.status(500).send();
      });
  };
}

module.exports = dogs;
