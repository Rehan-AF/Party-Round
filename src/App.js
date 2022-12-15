import { createTheme, ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Routers from "./routes";

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: "'Fahkwang', sans-serif",
    },
  });
  return (
    <div className="App">
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Routers />
        </ThemeProvider>
      </Provider>
    </div>
  );
}

export default App;
