import NavigationBar from '../../components/NavigationBar';
import Footer from '../../components/Footer';

import Main from './Main';
import Container from './Container';

function MainLayout({ children }) {
  return (
    <Container>
      <header>
        <NavigationBar />
      </header>
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
}

export default MainLayout;
