import { ThemeProvider } from 'styled-components';

// css
import '@brainhubeu/react-carousel/lib/style.css';

// layout
import MainLayout from '../src/layouts/MainLayout';

// shared
import GlobalStyles from '../src/shared/GlobalStyles';

// theme
import theme from '../src/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  );
}

export default MyApp;
