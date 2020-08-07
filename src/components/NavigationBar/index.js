import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'react-feather';

import NavigationContainer from './NavigationContainer';
import NavigationList from './NavigationList';
import NavListItem from './NavListItem';
import HamburgerMenu from './HamburgerMenu';
import MobNavContainer from './MobNavContainer';
import MobNavItem from './MobNavItem';

const MENU = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Profil',
    href: '/',
  },
  {
    label: 'Program',
    href: '/',
  },
  {
    label: 'Donasi',
    href: '/',
  },
  {
    label: 'Layanan',
    href: '/',
  },
  {
    label: 'Kontak',
    href: '/',
  },
];

function NavigationBar() {
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  function handleMenuClick() {
    setNavigationOpen(!isNavigationOpen);
  }

  return (
    <>
      <NavigationContainer>
        <img src="/images/lemsos-logo.jpg" alt="lemsos-logo" height="72px" />
        <NavigationList>
          {MENU.map(({ href, label }) => (
            <NavListItem>
              <Link href={href}>{label}</Link>
            </NavListItem>
          ))}
        </NavigationList>
        <HamburgerMenu onClick={handleMenuClick}>
          <Menu />
        </HamburgerMenu>
      </NavigationContainer>
      <MobNavContainer isOpen={isNavigationOpen}>
        <ul>
          {MENU.map(({ href, label }) => (
            <MobNavItem vertical>
              <Link href={href}>{label}</Link>
            </MobNavItem>
          ))}
        </ul>
      </MobNavContainer>
    </>
  );
}

export default NavigationBar;
