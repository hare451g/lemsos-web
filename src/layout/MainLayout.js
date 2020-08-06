import styled, { css } from 'styled-components';
import NavigationBar from '../components/NavigationBar';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  min-height: 100vh;
`;

const Main = styled.main(
  ({ theme: { colors } }) => css`
    background-color: ${colors.lightGray6};
    flex: 1;
  `
);

function MainLayout({ children }) {
  return (
    <Container>
      <header>
        <NavigationBar />
      </header>
      <Main>{children}</Main>
      <footer></footer>
    </Container>
  );
}

export default MainLayout;
