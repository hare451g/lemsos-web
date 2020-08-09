import numeral from 'numeral';

import { Box, Divider, Flex, Text } from '../../shared';

function Calculation({
  totalGoldAmount,
  totalWealth,
  totalNishab,
  zakatAmount,
}) {
  return (
    <>
      <Text as="h2" fontSize="1.25rem">
        Total Perhitungan
      </Text>
      <Divider />
      <Flex
        mb="1rem"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
          Jumlah Harga Emas
        </Text>
        <Text
          fontSize="1.15rem"
          mb="0.5rem"
          fontWeight="600"
          alignSelf="flex-end"
        >
          Rp.{numeral(totalGoldAmount).format('0,0')}
        </Text>
      </Flex>
      <Flex
        mb="1rem"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
          Jumlah Harta
        </Text>
        <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          Rp.{numeral(totalWealth).format('0,0')}
        </Text>
      </Flex>
      <Flex
        mb="1rem"
        width="100%"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
          Jumlah Zakat
        </Text>
        <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
          {totalNishab <= numeral(totalWealth).value()
            ? `Rp.${numeral(zakatAmount).format('0,0')}`
            : 'Belum memasuki Nishab'}
        </Text>
      </Flex>
    </>
  );
}

export default Calculation;
