import Link from 'next/link';
import { useState } from 'react';
import { Menu } from 'react-feather';

// shared
import { Flex, Text } from '../../shared';

// constants
import { mainNavigation } from '../../constants/routes';

// local components
import NavigationContainer from './NavigationContainer';
import NavigationList from './NavigationList';
import NavListItem from './NavListItem';
import HamburgerMenu from './HamburgerMenu';
import MobNavContainer from './MobNavContainer';
import MobNavItem from './MobNavItem';

function NavigationBar() {
  const [isNavigationOpen, setNavigationOpen] = useState(false);

  function handleMenuClick() {
    setNavigationOpen(!isNavigationOpen);
  }

  return (
    <>
      <NavigationContainer>
        <Flex alignItems="center">
          <img src="/images/lemsos-logo.jpg" alt="lemsos-logo" height="54px" />
          <Text ml="16px" fontSize="1.25rem" fontWeight="600">
            LEMSOS DQ AL MUQORROBIN
          </Text>
        </Flex>
        <NavigationList>
          {mainNavigation.map(({ href, label }) => (
            <NavListItem key={`nav-${href}`}>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </NavListItem>
          ))}
        </NavigationList>
        <HamburgerMenu onClick={handleMenuClick}>
          <Menu />
        </HamburgerMenu>
      </NavigationContainer>
      <MobNavContainer isOpen={isNavigationOpen} total={mainNavigation.length}>
        <ul>
          {mainNavigation.map(({ href, label }) => (
            <MobNavItem key={`mobnav-${href}`} vertical>
              <Link href={href}>
                <a>{label}</a>
              </Link>
            </MobNavItem>
          ))}
        </ul>
      </MobNavContainer>
    </>
  );
}

export default NavigationBar;
