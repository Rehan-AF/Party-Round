import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routers from "./routes";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;
