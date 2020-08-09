import { useState, useEffect } from 'react';
import numeral from 'numeral';

// hooks
import useForm from '../../hooks/useForm';

// components
import { Box, Button, Divider, Flex, Input, Text } from '../../shared';

// constants
import {
  calculateGoldZakat,
  countTotalGoldValue,
  countTotalWealth,
} from './calculateZakat';
import Calculation from './Calculation';

// claim based constants
const GOLD_PRICE = 1005000;
const NISHAB_IN_GRAM = 85;
const ZAKAT_PERCENTAGE = 0.025;

function GoldZakatForm() {
  const [saldo, setSaldo] = useForm(0);
  const [deposit, setDeposit] = useForm(0);
  const [goldSaving, setGoldSaving] = useForm(0);

  // calculated constants
  const totalGoldAmount = countTotalGoldValue(goldSaving, GOLD_PRICE);
  const totalWealth = countTotalWealth(saldo, deposit, goldSaving, GOLD_PRICE);
  const totalNishab = NISHAB_IN_GRAM * GOLD_PRICE;

  // calculated states
  const [zakatAmount, setZakatAmount] = useState(0);

  useEffect(() => {
    const totalZakat = calculateGoldZakat(totalWealth, ZAKAT_PERCENTAGE);
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

export default GoldZakatForm;
