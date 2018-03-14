# Transpile React and React-Dom with Babel-standalone

By using babel-standalone we are able to use React, React-Dom, and JSX in a regular HTML page.

Although the page performance is a bit slower, it is a good way to practice react or build a small parts of an existing application.

This repository was made to simply show the possibilities.

``` html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Running React with Babel-standalone</title>
  <!-- react -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <!-- react-dom -->
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <!-- babel-standalone -->
  <script crossorigin src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  <!-- css -->
  <link rel="stylesheet" href="css/component-survey.css">
</head>
<body>

  <div id="main"></div>
  <script type="text/babel" data-presets="es2015, react, stage-2" src="js/component-survey.js"></script>

</body>
</html>
```
