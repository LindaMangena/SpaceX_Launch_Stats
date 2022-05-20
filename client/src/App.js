import logo from "./logo.png";
import Launches from './Components/Launches'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
  // useQuery,
  // gql
} from "@apollo/client";
import "./App.css";


const client = new ApolloClient({

  uri : 'http://localhost:8080/graphql',
  cache: new InMemoryCache()
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
      <Launches/>
    </div>
    </ApolloProvider>
  );
}

export default App;
