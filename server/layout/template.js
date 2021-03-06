const template = (data, markup) => {
  return `<!DOCTYPE html>
<html>
  <head>
    <title>AirBnB</title>
    <link
      href="https://fonts.googleapis.com/css?family=Krub:400,700"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="bootstrap-grid.css" />
    <link rel="stylesheet" href="index.css" />
    <script
      crossorigin
      src="https://unpkg.com/react@16/umd/react.development.js"
    ></script>
    <script
      crossorigin
      src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
    ></script>
    <script
      src="https://code.jquery.com/jquery-3.3.1.js"
      integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
      crossorigin="anonymous"
    ></script>
    <script>window.__INITIAL_DATA__ =${data}</script>
  </head>
  <body>
    <div id="reviews">${markup}</div>
    <script type="text/javascript" src="bundle.js"></script>
  </body>
</html>`;
};

module.exports = template;
