import App from "../../client/src/components/App.jsx";
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter, matchPath } from "react-router-dom";
import serialize from "serialize-javascript";

const markup = renderToString(
  <StaticRouter location={req.url}>
    <App />
  </StaticRouter>
);
const template = `<!DOCTYPE html>
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
      src="https://code.jquery.com/jquery-3.3.1.js"
      integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div id="reviews">${markup}</div>
    <script type="text/javascript" src="bundle.js" defer></script>
  </body>
</html>`;

export default template;
