import logo from "./logo.png";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./App.css";
import Launches from "./Components/Launches";

const client = new ApolloClient({
  uri: 'http://localhost:8080/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="container">
      <img
        src={logo}
        alt="SpaceX"
        style={{ width: 200, display: "block", margin: "auto" }}
      />

      <Launches />
    </div>
    </ApolloProvider>
  );
}

export default App;
