import { useState, useEffect } from 'react';
import numeral from 'numeral';

// hooks
import useForm from '../../hooks/useForm';

// components
import { Box, Button, Divider, Flex, Input, Text } from '../../shared';

// services
import {
  calculateNettZakat,
  calculateTradeWealth,
  calculateTradeOutcome,
} from '../../services/Zakat/calculate';

// local
import Calculation from './Calculation';

function ZakatCompanyForm({
  nishab = 0,
  zakatPercentage = 0,
  onSubmit = () => {},
  infaqType = '',
}) {
  const [cash, setCash] = useForm(0);
  const [saving, setSaving] = useForm(0);
  const [totalItem, setTotalItem] = useForm(0);
  const [receiveable, setReceiveables] = useForm(0);

  const [loan, setLoan] = useForm(0);
  const [payments, setPayments] = useForm(0);

  const [amountZakat, setAmountZakat] = useState(0);

  const totalWealth = calculateTradeWealth({
    cash,
    saving,
    totalItem,
    receiveable,
  });

  const totalOutcome = calculateTradeOutcome({ loan, payments });

  useEffect(() => {
    const totalZakat = calculateNettZakat({
      totalIncome: totalWealth,
      totalOutcome,
      zakatPercentage,
    });
    setAmountZakat(totalZakat);
  }, [cash, saving, totalItem, receiveable, loan, payments]);

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      amount: zakatAmount,
      infaqType,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box mb="2rem">
        <Text as="h2" fontSize="1.5rem">
          Zakat Perusahaan
        </Text>
        <Divider mb="1rem" />
        <Text as="h3" fontSize="1.5rem" mb="1rem">
          Aktiva
        </Text>
        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Cash
          </Text>
          <Input
            type="text"
            value={numeral(cash).format('0,0')}
            onChange={setCash}
            placeholder="contoh: Rp.3,750,000"
            required
          />
        </Flex>

        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Uang Tabungan Usaha
          </Text>
          <Input
            type="text"
            value={numeral(saving).format('0,0')}
            onChange={setSaving}
            placeholder="contoh: Rp.3,750,000"
            required
          />
        </Flex>

        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Total Persediaan Barang
          </Text>
          <Input
            type="text"
            value={numeral(totalItem).format('0,0')}
            onChange={setTotalItem}
            placeholder="contoh: Rp.3,750,000"
            required
          />
        </Flex>

        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Piutang Lancar
          </Text>
          <Input
            type="text"
            value={numeral(receiveable).format('0,0')}
            onChange={setReceiveables}
            placeholder="contoh: Rp.3,750,000"
            required
          />
        </Flex>

        <Box my="1rem">
          <Flex justifyContent="space-between" alignItems="center">
            <Text as="h4" fontSize="1.15rem" mb="0.5rem" fontWeight="400">
              Total Aktiva
            </Text>
            <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
              Rp. {numeral(totalWealth).format('0,0')}
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box>
        <Text as="h3" fontSize="1.5rem" mb="1rem">
          Pasiva
        </Text>
        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Hutang Jatuh Tempo
          </Text>
          <Input
            type="text"
            value={numeral(loan).format('0,0')}
            onChange={setLoan}
            placeholder="contoh: Rp.3,750,000"
            required
          />
        </Flex>

        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Kewajiban
          </Text>
          <Input
            type="text"
            value={numeral(payments).format('0,0')}
            onChange={setPayments}
            placeholder="contoh: Rp.3,750,000"
            required
          />
        </Flex>

        <Box my="1rem">
          <Flex justifyContent="space-between" alignItems="center">
            <Text as="h4" fontSize="1.15rem" mb="0.5rem" fontWeight="400">
              Total Pasiva
            </Text>
            <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
              Rp. {numeral(totalOutcome).format('0,0')}
            </Text>
          </Flex>
        </Box>
      </Box>

      <Box my="2rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text as="h4" fontSize="1.15rem" mb="0.5rem" fontWeight="400">
            Nishab{' '}
          </Text>
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Rp. {numeral(nishab).format('0,0')}
          </Text>
        </Flex>
      </Box>

      <Calculation totalNettZakat={amountZakat} />

      <Button color="primary" block>
        Bayar
      </Button>
    </form>
  );
}

export default ZakatCompanyForm;
