import numeral from 'numeral';
import Link from 'next/link';

// components - shared
import { Box, Button, Divider, Flex, Text } from '../../shared';

// components - local
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
          <Flex alignItems="center">
            <img src="/images/mandiri-syariah.png" width="100px" />
            <Box ml="1rem">
              <Text
                fontSize="1.15rem"
                fontWeight="600"
                letterSpacing="0.115rem"
              >
                {accountNumber}
              </Text>
              <Text>
                a.n. <strong>{accountOwner}</strong>
              </Text>
            </Box>
          </Flex>
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
      <Link href="/">
        <a>
          <Button variant="solid" color="primary" block>
            Kembali ke Halaman Utama
          </Button>
        </a>
      </Link>
    </Box>
  );
}

export default TransferForm;
