import styled, { css } from 'styled-components';

import { Box, Flex, Text } from '../../shared/Box';

const FooterContainer = styled.footer(
  ({ theme: { colors } }) => css`
    background-color: ${colors.white};
    padding: 0 16px;
  `
);

function Footer() {
  return (
    <FooterContainer>
      <Flex alignItems="center">
        <Flex alignItems="center" width="50%">
          <img src="/images/logo.jpg" height="100px" alt="logo lemsos" />
          <Flex flexDirection="column" my="24px" ml="16px">
            <Text fontSize="1.2rem" mb="8px">
              Pondok Pesantren Darul Qur’an Al Muqorrobiin
            </Text>
            <Text>Jl. Curug Hillir No. 52, RT/RW 03/09, Kelurahan Curug</Text>
            <Text>Kecamatan Bojongsari, Kota Depok (16517)</Text>
            <Text mt="8px">Tel. (+62) 878-1944-7520</Text>
          </Flex>
        </Flex>
        <Flex alignItems="center" width="50%">
          <img src="/images/lemsos-logo.jpg" height="100px" alt="logo lemsos" />
          <Flex flexDirection="column" my="24px" ml="16px">
            <Text fontSize="1.2rem" mb="8px">
              Donasi &amp; Infaq Bisa Di Salurkan Melalui
            </Text>
            <Text>
              No Rekekening <strong>74545566668</strong>
            </Text>
            <Text>a.n Yayasan Darul Qur’an Al-Muqorrobiin</Text>
          </Flex>
        </Flex>
      </Flex>
    </FooterContainer>
  );
}

export default Footer;
