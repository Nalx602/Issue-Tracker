//As a convention, in this file we should only configure stuff only in regards to our Express app, which will

const express = require('express');

const app = express(); // it creates an Express JS application

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`);
});
