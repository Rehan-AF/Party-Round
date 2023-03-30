import { Provider } from 'react-redux';
import { store } from './redux/store';
import Routers from './routes';
import { createTheme, ThemeProvider } from '@material-ui/core';
import createBreakpoints from '@material-ui/core/styles/createBreakpoints';
function App() {
  const breakpointValues = {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1367,
    xl: 1920,
  };

  const breakpoints = createBreakpoints({ values: breakpointValues });
  const theme = createTheme({
    breakpoints,
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
