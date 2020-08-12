import { useState, useEffect } from 'react';
import numeral from 'numeral';

// components
import { Box, Button, Flex, Input, Text } from '../../../shared';

// hooks
import useForm from '../../../hooks/useForm';

// domain - utils
import calculate from '../utils/calculate';

// destructure
const {
  countGoldNishab,
  countGoldValue,
  countTotalWealth,
  countZakatGold,
} = calculate;

function ZakatGoldForm({ GOLD_PRICE, NISHAB_IN_GRAM, ZAKAT_PERCENTAGE }) {
  const [saldo, setSaldo] = useForm(0);
  const [deposit, setDeposit] = useForm(0);
  const [goldSaving, setGoldSaving] = useForm(0);

  // calculated states
  const [zakatAmount, setZakatAmount] = useState(0);

  // calculated constants
  const totalGoldAmount = countGoldValue(goldSaving, GOLD_PRICE);
  const totalWealth = countTotalWealth(saldo, deposit, totalGoldAmount);
  const totalNishab = countGoldNishab(goldSaving, NISHAB_IN_GRAM);

  // Handle form side effects
  useEffect(() => {
    const totalZakat = countZakatGold(totalWealth, ZAKAT_PERCENTAGE);
    setZakatAmount(totalZakat);
  }, [saldo, deposit, goldSaving]);

  return (
    <form>
      <Box mb="2rem">
        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Saldo Tabungan (Rp.)
          </Text>
          <Input
            type="text"
            value={numeral(saldo).format('0,0')}
            onChange={setSaldo}
            placeholder="contoh: Rp.100,000"
            required
          />
        </Flex>

        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Deposito (Rp.)
          </Text>
          <Input
            type="text"
            value={numeral(deposit).format('0,0')}
            onChange={setDeposit}
            placeholder="contoh: Rp.1,000,000"
            required
          />
        </Flex>

        <Flex flexDirection="column" mb="1rem">
          <Text as="label" fontSize="1.15rem" mb="0.5rem" fontWeight="600">
            Jumlah Emas (gram)
          </Text>
          <Flex alignItems="center" justifyContent="space-between" width="100%">
            <Flex alignItems="center">
              <Input
                type="number"
                value={goldSaving}
                onChange={setGoldSaving}
              />
              <Text fontSize="1.15rem" ml="1rem">
                Gram
              </Text>
            </Flex>
            <Text fontSize="1rem" ml="1rem" fontWeight="600">
              ( Harga 1 gram emas: Rp.{numeral(GOLD_PRICE).format('0,0')})
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Calculation
        totalGoldAmount={totalGoldAmount}
        totalWealth={totalWealth}
        totalNishab={totalNishab}
        zakatAmount={zakatAmount}
      />

      <Button color="primary" block>
        Bayar
      </Button>
    </form>
  );
}

export default ZakatGoldForm;
