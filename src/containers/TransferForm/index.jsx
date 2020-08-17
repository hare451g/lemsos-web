import numeral from 'numeral';

import { Box, Divider, Flex, Text } from '../../shared';
import AmountPanel from './AmountPanel';

function TransferForm({
  gender,
  name,
  type,
  amount,
  accountNumber,
  accountOwner,
  expiredAt,
  uniqueId,
}) {
  const pronounce = gender === 'Pria' ? 'Bapak' : 'Ibu';

  return (
    <Box bg="white" p="1rem">
      <Flex alignItems="center" justifyContent="space-between">
        <img src="/images/lemsos-logo.jpg" width="72px" />
        <Text fontSize="1.5rem" fontWeight="600" as="h1">
          Transaksi INFAQ
        </Text>
        <Text>15/09/2020</Text>
      </Flex>
      <Divider />
      <Flex>
        <Text fontSize="1.15rem" mt="0.5rem">
          Terima Kasih {pronounce} {name}, untuk melanjutkan proses INFAQ,
          silahkan lakukan transfer infaq ke rekening berikut:
        </Text>
      </Flex>

      <Box mb="1.5rem">
        <AmountPanel>
          <Box>
            <Text
              fontSize="1.15rem"
              fontWeight="600"
              letterSpacing="0.115rem"
              textAlign="center"
            >
              {accountNumber}
            </Text>
            <Text>
              a.n. <strong>{accountOwner}</strong>
            </Text>
          </Box>
        </AmountPanel>
      </Box>

      <Box mb="1.5rem">
        <Text fontSize="1.15rem" mt="0.5rem">
          Jumlah yang harus dibayarkan adalah:
        </Text>
        <AmountPanel>
          <Text
            fontSize="1.15rem"
            fontWeight="600"
            letterSpacing="0.115rem"
            textAlign="center"
          >
            Rp.{numeral(amount).format('0,0')}
          </Text>
        </AmountPanel>

        <Text fontWeight="600">*3 angka terakhir akan didonasikan</Text>
      </Box>

      <Box>
        <Text fontSize="1.15rem" mt="0.5rem">
          Mohon segera transfer sebelum:
        </Text>
        <AmountPanel>
          <Text
            fontSize="1.15rem"
            fontWeight="600"
            letterSpacing="0.115rem"
            textAlign="center"
          >
            {expiredAt}
          </Text>
        </AmountPanel>
      </Box>
    </Box>
  );
}

export default TransferForm;
