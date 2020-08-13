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
      <Text as="h2" fontSize="1.25rem">
        Total Perhitungan
      </Text>
      <Divider />
      <Box my="1.5rem">
        <Text as="h3" fontSize="1.25rem" mb="1.25rem">
          Zakat Profesi
        </Text>

        <Flex justifyContent="space-between">
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
            Total Zakat / Bulan{' '}
          </Text>
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Rp. {bruteZakat}
          </Text>
        </Flex>
        <Flex justifyContent="space-between">
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
            Total Zakat / Tahun
          </Text>
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Rp. {bruteZakatPerYear}
          </Text>
        </Flex>
      </Box>
      {withOutcome && (
        <Box my="1.5rem">
          <Text as="h3" fontSize="1.25rem" mb="1.25rem">
            Zakat Profesi dengan Pengeluaran
          </Text>

          <Flex justifyContent="space-between">
            <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
              Total Zakat / Bulan{' '}
            </Text>
            <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
              Rp. {nettZakat}
            </Text>
          </Flex>
          <Flex justifyContent="space-between">
            <Text fontSize="1.15rem" mb="0.5rem" fontWeight="400">
              Total Zakat / Tahun{' '}
            </Text>
            <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
              Rp. {nettZakatPerYear}
            </Text>
          </Flex>
        </Box>
      )}
    </>
  );
}

export default Calculation;
