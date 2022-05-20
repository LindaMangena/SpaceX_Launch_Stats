const express = require("express");
const { graphqlHTTP } = require('express-graphql');
const schema = require("./schema");
const app = express();
const cors = require('cors');

app.use( "/graphql",graphqlHTTP({
    schema,
    graphql: true,
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
