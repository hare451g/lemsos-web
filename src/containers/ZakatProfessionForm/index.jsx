import { useState, useEffect } from 'react';
import numeral from 'numeral';

// hooks
import useForm from '../../hooks/useForm';
import useToggle from '../../hooks/useToggle';

// components
import { Box, Button, Divider, Flex, Input, Text } from '../../shared';

// services
import {
  calculateNettZakat,
  calculateBruteZakat,
} from '../../services/Zakat/calculate';

// local
import Calculation from './Calculation';

function ZakatProfessionForm({ nishab = 0, zakatPercentage = 0 }) {
  const [totalIncome, setIncome] = useForm(0);
  const [totalOutcome, setOutcome] = useForm(0);
  const [withOutcome, setWithOutcome] = useToggle(false);

  const [totalNettZakat, setNettZakat] = useState(0);
  const [totalBruteZakat, setBruteZakat] = useState(0);

  useEffect(() => {
    const nett = calculateNettZakat({
      totalIncome,
      totalOutcome,
      zakatPercentage,
    });

    setNettZakat(nett);
  }, [totalIncome, totalOutcome]);

  useEffect(() => {
    const brute = calculateBruteZakat({
      totalWealth: totalIncome,
      zakatPercentage,
    });
    setBruteZakat(brute);
  }, [totalIncome]);

  function handleSubmit(e) {
    e.preventDefault();

    const formValues = {
      totalIncome,
      totalOutcome,
      withOutcome,
      totalNettZakat,
      totalBruteZakat,
    };
  }

  return (
    <form onSubmit={handleSubmit}>
      <Box mb="2rem">
        <Text as="h2" fontSize="1.5rem">
          Zakat Profesi
        </Text>
        <Divider mb="1rem" />

        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Pendapatan Bulanan
          </Text>
          <Input
            type="text"
            value={numeral(totalIncome).format('0,0')}
            onChange={setIncome}
            placeholder="contoh: Rp.3,750,000"
            required
          />
        </Flex>
        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            <input
              type="checkbox"
              onChange={setWithOutcome}
              checked={withOutcome}
            />
            Hitung dengan Pengeluaran?{' '}
          </Text>
        </Flex>
        {withOutcome && (
          <Flex flexDirection="column" mb="1rem">
            <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
              Pengeluaran Bulanan
            </Text>
            <Input
              type="text"
              value={numeral(totalOutcome).format('0,0')}
              onChange={setOutcome}
              placeholder="contoh: Rp.3,750,000"
              required
            />
          </Flex>
        )}
      </Box>
      <Box my="1rem">
        <Flex justifyContent="space-between" alignItems="center">
          <Text as="h4" fontSize="1.15rem" mb="0.5rem" fontWeight="400">
            Nishab{' '}
          </Text>
          <Text fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Rp. {numeral(nishab).format('0,0')}
          </Text>
        </Flex>
      </Box>

      <Calculation
        totalNettZakat={totalNettZakat}
        totalBruteZakat={totalBruteZakat}
        withOutcome={withOutcome}
      />

      <Button color="primary" block>
        Bayar
      </Button>
    </form>
  );
}

export default ZakatProfessionForm;
