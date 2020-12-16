const express = require('express');
const cors = require('cors');
const { SERVER_PORT } = require('./env');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes')(app);

app.listen(SERVER_PORT, () => {
  console.log(`Server running on port : ${SERVER_PORT}`);
});
