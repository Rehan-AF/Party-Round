import { Provider } from 'react-redux';
import { store } from './redux/store';
import Routers from './routes';
import { createTheme, ThemeProvider } from '@material-ui/core';
function App() {
  const theme = createTheme({
    typography: {
      // fontFamily: "'Fahkwang', sans-serif",
      // fontFamily: "'Poppins', sans-serif",
      fontFamily: "'Inter', sans-serif",
      letterSpacing: 0.6,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Routers />
        </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
