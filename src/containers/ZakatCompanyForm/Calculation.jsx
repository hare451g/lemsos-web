import numeral from 'numeral';

// components
import { Box, Divider, Flex, Text } from '../../shared';

function Calculation({ totalNettZakat = 0 }) {
  const totalZakat = numeral(totalNettZakat).format('0,0');

  return (
    <>
      <Text as="h2" fontSize="1.25rem">
        Total Perhitungan
      </Text>
      <Divider />
      <Box my="1.5rem">
        <Flex justifyContent="space-between">
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
            Total Zakat yang Harus Dibayar
          </Text>
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Rp. {totalZakat}
          </Text>
        </Flex>
      </Box>
    </>
  );
}

export default Calculation;
