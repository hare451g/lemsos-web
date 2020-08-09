import { ThemeProvider } from 'styled-components';

// css
import '@brainhubeu/react-carousel/lib/style.css';

// shared
import GlobalStyles from '../src/shared/GlobalStyles';

// theme
import theme from '../src/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
