import logo from "./logo.png";
import { ApolloClient } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import "./App.css";


const client = new ApolloClient({

  uri : 'http://localhost:8080/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 200, display: "block", margin: "auto" }}
      />
    </div>
    </ApolloProvider >
  );
}

export default App;
