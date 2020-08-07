import { ThemeProvider } from 'styled-components';
import '@brainhubeu/react-carousel/lib/style.css';

import GlobalStyles from '../src/shared/GlobalStyles';
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
