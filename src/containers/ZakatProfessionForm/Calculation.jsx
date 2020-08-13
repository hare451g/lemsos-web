import numeral from 'numeral';

// components
import { Box, Divider, Flex, Text } from '../../shared';

function Calculation({
  totalNettZakat = 0,
  totalBruteZakat = 0,
  withOutcome = false,
}) {
  const bruteZakat = numeral(totalBruteZakat).format('0,0');
  const nettZakat = numeral(totalNettZakat).format('0,0');

  const bruteZakatPerYear = numeral(totalBruteZakat * 12).format('0,0');
  const nettZakatPerYear = numeral(totalNettZakat * 12).format('0,0');

  return (
    <>
      <Box my="1.5rem">
        <Text as="h3" fontSize="1.25rem">
          Zakat Profesi
        </Text>
        <Divider />
        <Flex justifyContent="space-between">
          <Text>Total Zakat / Bulan </Text>
          <Text>Rp. {bruteZakat}</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Total Zakat / Tahun</Text>
          <Text>Rp. {bruteZakatPerYear}</Text>
        </Flex>
      </Box>
      {withOutcome && (
        <Box my="1.5rem">
          <Text as="h3" fontSize="1.25rem">
            Zakat Profesi dengan Pengeluaran
          </Text>
          <Divider />
          <Flex justifyContent="space-between">
            <Text>Total Zakat / Bulan </Text>
            <Text>Rp. {nettZakat}</Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text>Total Zakat / Tahun </Text>
            <Text>Rp. {nettZakatPerYear}</Text>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Calculation;
