import Link from 'next/link';

import NavigationContainer from './NavigationContainer';
import NavigationList from './NavigationList';
import NavListItem from './NavListItem';

function NavigationBar() {
  return (
    <NavigationContainer>
      <img src="/images/lemsos-logo.jpg" alt="lemsos-logo" height="72px" />
      <NavigationList>
        <NavListItem>
          <Link href="/">Home</Link>
        </NavListItem>
        <NavListItem>
          <Link href="/">Profil</Link>
        </NavListItem>
        <NavListItem>
          <Link href="/">Program</Link>
        </NavListItem>
        <NavListItem>
          <Link href="/">Donasi</Link>
        </NavListItem>
        <NavListItem>
          <Link href="/">Layanan</Link>
        </NavListItem>
        <NavListItem>
          <Link href="/">Kontak</Link>
        </NavListItem>
      </NavigationList>
    </NavigationContainer>
  );
}

export default NavigationBar;
